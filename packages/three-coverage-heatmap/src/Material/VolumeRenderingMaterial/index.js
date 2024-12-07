import * as THREE from "three";
import { getVertexShader } from "./vertexShader";
import { getFragmentShader } from "./fragmentShader";

/**
 * Responsibles for Volume Rendering
 * @class
 * @extends THREE.ShaderMaterial
 */
class VolumeRenderingMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      transparent: true,
      uniforms: {
        dataTexture: { value: null },
        volumeSize: { value: new THREE.Vector3(1, 1, 1) },
        planeCount: {
          value: 0,
        },
        isoValue: {
          value: 0.8,
        },
      },
      vertexShader: getVertexShader(),
      fragmentShader: getFragmentShader(),
    });
  }

  /**
   * Sets uniforms for the application.
   * @param {Array<number>} options.volumeSize - The size of volume.
   * @param {number} options.isoValue - The surface value of volume rendering.
   * @returns {void}
   */
  setUniforms({ volumeSize, isoValue }) {
    const isDefined = (value) => value !== undefined;

    if (isDefined(volumeSize)) {
      this.uniforms.volumeSize.value = new THREE.Vector3().fromArray(
        volumeSize
      );
    }

    if (isDefined(isoValue)) {
      this.uniforms.isoValue.value = isoValue;
    }
  }

  setDataTexture(texture) {
    if (this.uniforms.dataTexture.value)
      this.uniforms.dataTexture.value.dispose();
    this.uniforms.dataTexture.value = texture;
  }
}

export default VolumeRenderingMaterial;
