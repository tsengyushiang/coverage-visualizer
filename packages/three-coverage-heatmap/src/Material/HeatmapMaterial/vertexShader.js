const getVertexShader = () => `
varying vec4 world_position;
varying vec2 vUv;

void main() {
  world_position = modelMatrix * vec4(position, 1.0);
  vUv = uv;
  gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export { getVertexShader };
