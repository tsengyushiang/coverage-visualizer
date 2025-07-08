import calculateIntensity from "../heatmap.glsl";

const core = (signalCount, aabbCount, planeCount, compute) => `
#define SIGNAL_COUNT ${signalCount}
#define AABB_COUNT ${aabbCount * 2}
#define PLANE_COUNT ${planeCount * 2}

uniform vec3 volumeSize;
uniform float isoValue;
uniform vec3 color;

varying vec3 vRayDirection;
varying vec3 vRayOrigin;

${calculateIntensity}
${compute}

bool isRayOriginInAABB(vec3 vRayOrigin, vec3 aabbmin, vec3 aabbmax) {
  bool insideX = (vRayOrigin.x >= aabbmin.x) && (vRayOrigin.x <= aabbmax.x);
  bool insideY = (vRayOrigin.y >= aabbmin.y) && (vRayOrigin.y <= aabbmax.y);
  bool insideZ = (vRayOrigin.z >= aabbmin.z) && (vRayOrigin.z <= aabbmax.z);
  return insideX && insideY && insideZ;
}

void main() {
  vec3 aabbmin = vec3(-volumeSize.x / 2.0, 0.0, -volumeSize.z / 2.0);
  vec3 aabbmax = vec3(volumeSize.x / 2.0, volumeSize.y, volumeSize.z / 2.0);
  vec2 intersection = intersectAABB(vRayOrigin, vRayDirection, aabbmin, aabbmax);

  if (intersection.x <= intersection.y) {

    if (intersection.x < 0.0) {
      if (isRayOriginInAABB(vRayOrigin, aabbmin, aabbmax)) {
        intersection.x = 1e-3;
      } else {
        discard;
      }
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
      float value = compute(point);

      vec4 color = vec4(0.0);
      if (value > 0.95) {
        color = vec4(1.0, 0.0, 0.0, 0.5);
      } else if (value > 0.5) {
        color = vec4(0.0, 1.0, 0.0, 0.5);
      } else if (value > 1e-6) {
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

const realTimeRendering = `
float compute(vec3 point) {
  Result result = getSignalDensity(vec4(point, 1.0), vec2(0.0));
  return result.density;
}
`;

const texture3DRendering = `
uniform sampler3D dataTexture;
float compute(vec3 point) {
  vec3 coord = vec3(point.x / volumeSize.x + 0.5, point.z / volumeSize.z + 0.5, point.y / volumeSize.y);
  return texture(dataTexture, coord).x;
}
`;

const getFragmentShaderWoTexture3D = (signalCount, aabbCount, planeCount) => {
  return core(signalCount, aabbCount, planeCount, realTimeRendering);
};

const getFragmentShader = (signalCount, aabbCount, planeCount) => {
  return core(signalCount, aabbCount, planeCount, texture3DRendering);
};

export { getFragmentShader, getFragmentShaderWoTexture3D };
