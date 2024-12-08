const getVertexShader = () => `
varying vec3 vRayDirection;
varying vec3 vRayOrigin;

void main() {
  vec4 viewPos = inverse(projectionMatrix) * vec4(position, 1.0);
  vec4 cameraPosition = inverse(viewMatrix) * vec4(0.0, 0.0, 0.0, 1.0);
  vec4 worldPosition = inverse(viewMatrix) * vec4(viewPos.xy, -1.0, 1.0);
  vec3 rayDirection = normalize(worldPosition.xyz - cameraPosition.xyz);
  vRayDirection = rayDirection;
  vRayOrigin = cameraPosition.xyz;

  gl_Position = projectionMatrix * vec4(viewPos.xy, -1.0, 1.0);
}
`;

export { getVertexShader };
