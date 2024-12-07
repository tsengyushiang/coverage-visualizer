import * as THREE from "three";
import VolumeRenderingMaterial from "../Material/VolumeRenderingMaterial";

class VolumeRendering extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      ...[-1.0, -1.0, -1.0],
      ...[1.0, -1.0, -1.0],
      ...[-1.0, 1.0, -1.0],
      ...[1.0, 1.0, -1.0],
    ]);

    geometry.setIndex([0, 1, 2, 3, 2, 1]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const material = new VolumeRenderingMaterial();
    super(geometry, material);
  }

  setUniforms(data) {
    this.material.setUniforms(data);
  }
}

export default VolumeRendering;
