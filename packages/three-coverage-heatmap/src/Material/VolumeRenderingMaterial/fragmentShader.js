import calculateIntensity from "../heatmap.glsl";
const getFragmentShader = (signalCount, aabbCount, planeCount) => `
#define SIGNAL_COUNT ${signalCount}
#define AABB_COUNT ${aabbCount * 2}
#define PLANE_COUNT ${planeCount * 2}

${calculateIntensity}

uniform sampler3D dataTexture;

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

// Sampling of the volume data texture.
float sampleData(vec3 coord) {
  return texture(dataTexture, coord).x;
}

void main() {
  bool hasIntersect = false;
  float nearestWallDistance = 1e6;
  for (int aabbIndex = 0; aabbIndex < aabbCount; aabbIndex++) {
    vec2 nearFar = intersectAABB(vRayOrigin, vRayDirection, aabbs[2 * aabbIndex], aabbs[2 * aabbIndex + 1]);
    bool noIntersections = nearFar.x > nearFar.y || nearFar.x < 0.0;
    if (noIntersections) {
      continue;
    }

    if(nearFar.x < nearestWallDistance){
     nearestWallDistance = nearFar.x;
     hasIntersect = true;
    }
  }

  // if(hasIntersect){
  //   gl_FragColor = vec4(1.0,0.0,0.0,0.5);
  //   return;
  // }

  vec3 aabbmin = vec3(-10.0,0.0,-10.0);
  vec3 aabbmax = vec3(10.0,3.0,10.0);
  vec2 intersection = intersectAABB(vRayOrigin, vRayDirection, aabbmin, aabbmax);

  if (intersection.x <= intersection.y) {

    vec3 entryPoint = vRayOrigin + vRayDirection * intersection.x;
    vec3 exitPoint = vRayOrigin + vRayDirection * intersection.y;
    vec3 entryToExit = exitPoint - entryPoint;

    float density = 0.0;
    for (float i = 0.0; i < 1.0; i += 5e-2) {
      vec3 point = entryPoint + entryToExit * i;

      float value = sampleData(vec3(point.x/20.0+0.5,point.z/20.0+0.5,point.y/3.0));      

      if (value > density && value > 0.8) {
        density = value;
      }
    }

    gl_FragColor = vec4(density);
    return;
  }

  discard;
}
`;

export { getFragmentShader };
