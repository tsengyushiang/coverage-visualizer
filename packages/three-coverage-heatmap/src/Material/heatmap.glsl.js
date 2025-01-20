/*
#define SIGNAL_COUNT 30
#define AABB_COUNT 40
#define PLANE_COUNT 50

${import calculateIntensity here}

void main() {
  Result result = getSignalDensity(world_position);
  gl_FragColor = vec4(result.density, result.density, result.density, 1.0);
  //gl_FragColor = vec4(result.maxSignalIndex, result.maxSignalIndex, result.maxSignalIndex, 1.0);
}
*/

const calculateIntensity = `

uniform vec3 signals[SIGNAL_COUNT];
uniform float signalIntensities[SIGNAL_COUNT];
uniform int signalCount;
uniform vec3 aabbs[AABB_COUNT];
uniform int aabbCount;
uniform vec3 planes[PLANE_COUNT];
uniform int planeCount;

float decay(float distance, float intensity) {
  return 1.0 / pow(distance / intensity + 1.0, 2.0);
}

// adapted from intersectCube in https://github.com/evanw/webgl-path-tracing/blob/master/webgl-path-tracing.js
// compute the near and far intersections of the cube (stored in the x and y components) using the slab method
// no intersection means vec.x > vec.y (really tNear > tFar)
vec2 intersectAABB(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
  vec3 tMin = (boxMin - rayOrigin) / rayDir;
  vec3 tMax = (boxMax - rayOrigin) / rayDir;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

float PointInOrOn(vec3 P1, vec3 P2, vec3 A, vec3 B) {
  vec3 CP1 = cross(B - A, P1 - A);
  vec3 CP2 = cross(B - A, P2 - A);
  return step(0.0, dot(CP1, CP2));
}

bool PointInTriangle(vec3 px, vec3 p0, vec3 p1, vec3 p2) {
  return PointInOrOn(px, p0, p1, p2) * PointInOrOn(px, p1, p2, p0) * PointInOrOn(px, p2, p0, p1) < 1e-3;
}

vec3 IntersectPlane(vec3 rayOrigin, vec3 rayDir, vec3 p0, vec3 p1, vec3 p2) {
  vec3 D = rayDir;
  vec3 N = cross(p1 - p0, p2 - p0);
  vec3 X = rayOrigin + D * dot(p0 - rayOrigin, N) / dot(D, N);
  return X;
}

bool pointOnRay(vec3 point, vec3 rayOrigin, vec3 rayDir) {
  vec3 intersectionDir = normalize(rayOrigin - point);
  return dot(intersectionDir, rayDir) < (1.0 - 1e-3);
}

bool intersect(vec3 origin, vec3 rayDir, vec3 p0, vec3 p1, vec3 p2, float maxDistance) {
  vec3 x = IntersectPlane(origin, rayDir, p0, p1, p2);
  bool noIntersections = PointInTriangle(x, p0, p1, p2) || !pointOnRay(x, origin, rayDir) || distance(x, origin) > maxDistance - 1e-3;
  return !noIntersections;
}

vec3 hsvToRgb(float h, float s, float v) {
  if (s == 0.0) {
    return vec3(v, v, v);
  }

  float h6 = h * 6.0;
  int i = int(floor(h6));
  float f = h6 - float(i);
  float p = v * (1.0 - s);
  float q = v * (1.0 - f * s);
  float t = v * (1.0 - (1.0 - f) * s);

  if (i == 0) {
    return vec3(v, t, p);
  } else if (i == 1) {
    return vec3(q, v, p);
  } else if (i == 2) {
    return vec3(p, v, t);
  } else if (i == 3) {
    return vec3(p, q, v);
  } else if (i == 4) {
    return vec3(t, p, v);
  } else {
    return vec3(v, p, q);
  }
}

vec2 rotate(vec2 v, float angle) {
  float cosA = cos(angle);
  float sinA = sin(angle);

  return vec2(
    v.x * cosA - v.y * sinA,
    v.x * sinA + v.y * cosA
  );
}

float pointToLineDistance(vec2 point) {
  float x0 = point.x;
  float y0 = point.y;

  float A = 1.0;
  float B = -1.0;
  float C = 0.0;

  return abs(A * x0 + B * y0 + C) / sqrt(A * A + B * B);
}

vec3 getIndicesMapColor(vec2 fragCoord, float anglePercentage, float gridSize) {
  vec3 bgColor = vec3(0.0, 0.0, 0.0);

  float x = mod(fragCoord.x, gridSize) / gridSize;
  float y = mod(fragCoord.y, gridSize) / gridSize;

  if (distance(vec2(x, y), vec2(0.5, 0.5)) > 0.4) {
    return bgColor;
  }

  vec2 direction = rotate(vec2(x - 0.5, y - 0.5), anglePercentage * 3.1415926535897932384626433832795) + vec2(0.5, 0.5);
  bool isLineFragment = pointToLineDistance(direction) < 0.05;

  if (isLineFragment) {
    return hsvToRgb(anglePercentage / 3.14, 1.0, 1.0);
  }

  return bgColor;
}

struct Result {
  vec4 signalColor;
  float density;
};

Result getSignalDensity(vec4 world_position) {
  vec3 color = vec3(0.0, 0.0, 0.0);
  float density = 1e-3;
  for (int signalIndex = 0; signalIndex < signalCount; signalIndex++) {
    float wallDistance = 0.0;
    vec3 signalPosition = signals[signalIndex].xyz;
    vec3 rayDir = normalize(world_position.xyz - signalPosition);

    float totalDistance = distance(world_position.xyz, signalPosition);

    for (int aabbIndex = 0; aabbIndex < aabbCount; aabbIndex++) {
      vec2 nearFar = intersectAABB(signalPosition, rayDir, aabbs[2 * aabbIndex], aabbs[2 * aabbIndex + 1]);
      bool noIntersections = nearFar.x > nearFar.y || nearFar.x < 0.0 || nearFar.x > totalDistance - 1e-3;
      if (noIntersections) {
        continue;
      }

      wallDistance += nearFar.y - nearFar.x;
    }

    for (int planeIndex = 0; planeIndex < planeCount; planeIndex++) {
      vec3 min = planes[2 * planeIndex];
      vec3 max = planes[2 * planeIndex + 1];

      vec3 p0 = min;
      vec3 p1 = vec3(max.x, min.y, max.z);
      vec3 p2 = max;
      vec3 p3 = vec3(min.x, max.y, min.z);

      if (!intersect(signalPosition, rayDir, p0, p1, p2, totalDistance) && !intersect(signalPosition, rayDir, p3, p0, p2, totalDistance)) {
        continue;
      }

      wallDistance += 0.15;
    }

    float wallDecay = wallDistance * 0.2;
    float newDensity = decay(totalDistance - wallDistance, signalIntensities[signalIndex]) - wallDecay;

    if (newDensity > density) {
      density = newDensity;
    }
    if (newDensity > 1e-3)
      color += getIndicesMapColor(gl_FragCoord.xy, float(signalIndex) / float(signalCount), 15.0);
  }

  Result result;
  result.signalColor = vec4(color, 1.0);
  result.density = density;
  return result;
}
`;
export default calculateIntensity;
