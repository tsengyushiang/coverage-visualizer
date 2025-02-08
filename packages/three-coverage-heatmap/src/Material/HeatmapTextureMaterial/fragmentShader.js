import calculateIntensity from "../heatmap.glsl";
const getFragmentShader = (signalCount, aabbCount, planeCount) => `
#define SIGNAL_COUNT ${signalCount}
#define AABB_COUNT ${aabbCount * 2}
#define PLANE_COUNT ${planeCount * 2}

${calculateIntensity}

varying vec4 world_position;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 opacityToHSV(float opacity) {
  float minHue = 0.7;
  float maxHue = 0.0;
  float hue = mix(minHue, maxHue, opacity);
  return hsv2rgb(vec3(hue, 1.0, 1.0));
}

void main() {
  Result result = getSignalDensity(world_position, vec2(0.0));
  // gl_FragColor = vec4(result.density, result.density, result.density, 1.0);
  gl_FragColor = vec4(opacityToHSV(result.density), 1.0);
}
`;

export { getFragmentShader };
