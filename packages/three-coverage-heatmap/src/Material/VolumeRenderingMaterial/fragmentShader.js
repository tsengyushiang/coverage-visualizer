import calculateIntensity from "../heatmap.glsl";

const getFragmentShaderWoTexture3D = (signalCount, aabbCount, planeCount) => `
#define SIGNAL_COUNT ${signalCount}
#define AABB_COUNT ${aabbCount * 2}
#define PLANE_COUNT ${planeCount * 2}

uniform vec3 volumeSize;
uniform float isoValue;
uniform vec3 color;

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

${calculateIntensity}

void main() {
  vec3 aabbmin = vec3(-volumeSize.x / 2.0, 0.0, -volumeSize.z / 2.0);
  vec3 aabbmax = vec3(volumeSize.x / 2.0, volumeSize.y, volumeSize.z / 2.0);
  vec2 intersection = intersectAABB(vRayOrigin, vRayDirection, aabbmin, aabbmax);

  if (intersection.x <= intersection.y) {

    if (intersection.x < 0.0) {
      intersection.x = 1e-3;
    }

    float nearestWall = 1e6;
    for (int aabbIndex = 0; aabbIndex < aabbCount; aabbIndex++) {
      vec2 nearFar = intersectAABB(vRayOrigin, vRayDirection, aabbs[2 * aabbIndex], aabbs[2 * aabbIndex + 1]);
      bool noIntersections = nearFar.x > nearFar.y || nearFar.x < 0.0;
      if (noIntersections) {
        continue;
      }
      if(nearFar.x < nearestWall){
        nearestWall = nearFar.x;
      }
    }
    intersection.x = min(intersection.x,nearestWall);
    intersection.y = min(intersection.y,nearestWall);

    vec3 entryPoint = vRayOrigin + vRayDirection * intersection.x;
    vec3 exitPoint = vRayOrigin + vRayDirection * intersection.y;
    vec3 entryToExit = exitPoint - entryPoint;

    vec4 latestColor = vec4(0.0);
    for (float i = 0.0; i < 1.0; i += 1e-1) {
      vec3 point = entryPoint + entryToExit * i;
      Result result = getSignalDensity(vec4(point, 1.0), vec2(0.0));
      float value = result.density;

      vec4 color = vec4(0.0);
      if (value > 0.95) {
        color = vec4(1.0, 0.0, 0.0, 0.5);
      } else if (value > 0.5) {
        color = vec4(0.0, 1.0, 0.0, 0.5);
      } else if (value > 0.2) {
        color = vec4(0.0, 0.0, 1.0, 0.5);
      }

      if (distance(latestColor, color) < 1e-3 || distance(color, vec4(0.0)) < 1e-3) {
        continue;
      }

      latestColor = color;

      gl_FragColor.rgb += (1.0 - gl_FragColor.a) * color.a * color.rgb;
      gl_FragColor.a += (1.0 - gl_FragColor.a) * color.a;

      if (gl_FragColor.a >= 0.95) {
        return;
      }
    }
  }
}

`;

const getFragmentShader = () => `
uniform sampler3D dataTexture;
uniform vec3 volumeSize;
uniform float isoValue;
uniform vec3 color;

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

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

void main() {
  vec3 aabbmin = vec3(-volumeSize.x / 2.0, 0.0, -volumeSize.z / 2.0);
  vec3 aabbmax = vec3(volumeSize.x / 2.0, volumeSize.y, volumeSize.z / 2.0);
  vec2 intersection = intersectAABB(vRayOrigin, vRayDirection, aabbmin, aabbmax);

  if (intersection.x <= intersection.y) {

    if (intersection.x < 0.0) {
      intersection.x = 1e-3;
    }

    vec3 entryPoint = vRayOrigin + vRayDirection * intersection.x;
    vec3 exitPoint = vRayOrigin + vRayDirection * intersection.y;
    vec3 entryToExit = exitPoint - entryPoint;

    vec4 latestColor = vec4(0.0);
    for (float i = 0.0; i < 1.0; i += 2e-2) {
      vec3 point = entryPoint + entryToExit * i;

      vec3 coord = vec3(point.x / volumeSize.x + 0.5, point.z / volumeSize.z + 0.5, point.y / volumeSize.y);
      float value = texture(dataTexture, coord).x;

      vec4 color = vec4(0.0);
      if (value > 0.95) {
        color = vec4(1.0, 0.0, 0.0, 0.5);
      } else if (value > 0.5) {
        color = vec4(0.0, 1.0, 0.0, 0.5);
      } else if (value > 0.2) {
        color = vec4(0.0, 0.0, 1.0, 0.5);
      }

      if (distance(latestColor, color) < 1e-3 || distance(color, vec4(0.0)) < 1e-3) {
        continue;
      }

      latestColor = color;

      gl_FragColor.rgb += (1.0 - gl_FragColor.a) * color.a * color.rgb;
      gl_FragColor.a += (1.0 - gl_FragColor.a) * color.a;

      if (gl_FragColor.a >= 0.95) {
        return;
      }
    }
  }
}
`;

export { getFragmentShader, getFragmentShaderWoTexture3D };
