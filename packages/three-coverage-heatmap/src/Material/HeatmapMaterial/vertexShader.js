const getVertexShader = () => `

attribute vec2 gridUv;

varying vec4 world_position;
varying vec2 vUv;
varying vec2 vGridUv;

void main() {
  world_position = modelMatrix * vec4(position, 1.0);
  vGridUv = gridUv;
  vUv = uv;
  gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export { getVertexShader };
