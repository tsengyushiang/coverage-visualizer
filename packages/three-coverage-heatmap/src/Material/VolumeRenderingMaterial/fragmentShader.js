import calculateIntensity from "../heatmap.glsl";
const getFragmentShader = (signalCount, aabbCount, planeCount) => `
#define SIGNAL_COUNT ${signalCount}
#define AABB_COUNT ${aabbCount * 2}
#define PLANE_COUNT ${planeCount * 2}

${calculateIntensity}

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

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

  if(hasIntersect){
    gl_FragColor = vec4(1.0,0.0,0.0,0.5);
    return;
  }

  discard;
}
`;

export { getFragmentShader };
