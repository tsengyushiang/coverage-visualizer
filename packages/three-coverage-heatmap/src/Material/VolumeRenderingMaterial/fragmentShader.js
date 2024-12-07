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
    vec3 entryPoint = vRayOrigin + vRayDirection * intersection.x;
    vec3 exitPoint = vRayOrigin + vRayDirection * intersection.y;
    vec3 entryToExit = exitPoint - entryPoint;

    float density = 0.0;
    for (float i = 0.0; i < 1.0; i += 2e-2) {
      vec3 point = entryPoint + entryToExit * i;

      vec3 coord = vec3(point.x / volumeSize.x + 0.5, point.z / volumeSize.z + 0.5, point.y / volumeSize.y);
      float value = texture(dataTexture, coord).x;

      if (value > density && value >= isoValue) {
        gl_FragColor = vec4(color, 0.5);
        return;
      }
    }
  }
  discard;
}
`;

export { getFragmentShader };
