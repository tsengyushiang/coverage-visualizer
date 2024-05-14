export default `
uniform vec3 aps[1];
uniform vec3 walls[2];
varying vec4 world_position;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 opacityToHSV(float opacity) {
  // Define the range of hues (0.0 to 1.0)
  float minHue = 1.0;
  float maxHue = 0.0;

  // Map opacity to hue
  float hue = mix(minHue, maxHue, opacity);

  // Convert hue to RGB in HSV color space
  return hsv2rgb(vec3(hue, 1.0, 1.0));
}

float decay(float distance) {
  return 1.0 / pow(distance * 5e-2 + 1.0, 2.0);
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

void main() {
  float distance = distance(world_position.xyz, aps[0].xyz);
  float density = decay(distance);

  vec3 rayDir = normalize(world_position.xyz - aps[0].xyz);
  vec2 nearFar = intersectAABB(aps[0].xyz, rayDir, walls[0], walls[1]);

  bool noIntersections = nearFar.x > nearFar.y || nearFar.x < 0.0;
  if (noIntersections) {
    gl_FragColor = vec4(opacityToHSV(density), 1.0);
    return;
  }

  float wallDecay = (nearFar.y - nearFar.x) * 0.15;
  float newDensity = density - wallDecay;
  gl_FragColor = vec4(opacityToHSV(newDensity), 1.0);
}
`;
