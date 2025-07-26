import * as THREE from "three";
import { getVertexShader } from "./vertexShader";
import {
  getFragmentShader,
  getFragmentShaderWoTexture3D,
} from "./fragmentShader";

/**
 * Responsibles for Volume Rendering
 * @class
 * @extends THREE.ShaderMaterial
 */
class VolumeRenderingMaterial extends THREE.ShaderMaterial {
  static _getUniformLimitation() {
    return {
      MAX_SIGNAL_COUNT: 30,
      MAX_AABB_COUNT: 50,
      MAX_PLANE_COUNT: 80,
    };
  }

  constructor(woTexture3d) {
    const { MAX_SIGNAL_COUNT, MAX_AABB_COUNT, MAX_PLANE_COUNT } =
      VolumeRenderingMaterial._getUniformLimitation();

    super({
      transparent: true,
      uniforms: {
        dataTexture: { value: null },
        volumeSize: { value: new THREE.Vector3(1, 1, 1) },
        isoValue: {
          value: 0.8,
        },
        color: {
          value: new THREE.Color(),
        },
        planeCount: {
          value: 0,
        },
        aabbCount: {
          value: 0,
        },
        signalCount: {
          value: 0,
        },
        signalIntensities: {
          value: Array(MAX_SIGNAL_COUNT).fill(10),
        },
        signals: {
          value: Array(MAX_SIGNAL_COUNT).fill(new THREE.Vector3()),
        },
        aabbs: {
          value: Array(MAX_AABB_COUNT * 2).fill(new THREE.Vector3()),
        },
        planes: {
          value: Array(MAX_PLANE_COUNT * 2).fill(new THREE.Vector3()),
        },
      },
      vertexShader: getVertexShader(),
      fragmentShader: (woTexture3d
        ? getFragmentShaderWoTexture3D
        : getFragmentShader)(MAX_SIGNAL_COUNT, MAX_AABB_COUNT, MAX_PLANE_COUNT),
    });
  }

  /**
   * Sets uniforms for the application.
   * @param {Array<number>} options.volumeSize - The size of volume.
   * @param {number} options.isoValue - The surface value of volume rendering.
   * @param {number} options.planeCount - The count of planes.
   * @param {number} options.aabbCount - The count of axis-aligned bounding boxes.
   * @param {number} options.signalCount - The count of signals.
   * @param {Array<THREE.Vector3>} options.signals - An array containing signal data.
   * @param {Array<number>} options.signalIntensities - An array containing signal intensities.
   * @param {Array<THREE.Vector3>} options.aabbs - An array containing axis-aligned bounding box data.
   * @param {Array<THREE.Vector3>} options.planes - An array containing plane data.
   * @returns {void}
   */
  setUniforms({
    volumeSize,
    isoValue,
    planeCount,
    aabbCount,
    signalCount,
    signals,
    signalIntensities,
    aabbs,
    planes,
  }) {
    const { MAX_SIGNAL_COUNT, MAX_AABB_COUNT, MAX_PLANE_COUNT } =
      VolumeRenderingMaterial._getUniformLimitation();

    const isDefined = (value) => value !== undefined;

    if (isDefined(volumeSize)) {
      this.uniforms.volumeSize.value = new THREE.Vector3().fromArray(
        volumeSize
      );
    }

    if (isDefined(isoValue)) {
      this.uniforms.isoValue.value = isoValue;

      const color = new THREE.Color();
      color.setHSL(isoValue, 1, 0.5);
      this.uniforms.color.value = color;
    }

    if (isDefined(planeCount)) {
      this.uniforms.planeCount.value = planeCount;
    }

    if (isDefined(aabbCount)) {
      this.uniforms.aabbCount.value = aabbCount;
    }

    if (isDefined(signalCount)) {
      this.uniforms.signalCount.value = signalCount;
    }

    if (signalIntensities) {
      this.uniforms.signalIntensities.value = [
        ...signalIntensities,
        ...Array(MAX_SIGNAL_COUNT - signalIntensities.length).fill(0),
      ];
    }

    if (signals) {
      this.uniforms.signals.value = [
        ...signals,
        ...Array(MAX_SIGNAL_COUNT - signals.length).fill(new THREE.Vector3()),
      ];
    }

    if (aabbs) {
      this.uniforms.aabbs.value = [
        ...aabbs,
        ...Array(MAX_AABB_COUNT * 2 - aabbs.length).fill(new THREE.Vector3()),
      ];
    }

    if (planes) {
      this.uniforms.planes.value = [
        ...planes,
        ...Array(MAX_PLANE_COUNT * 2 - planes.length).fill(new THREE.Vector3()),
      ];
    }
  }

  /**
   * Sets dataTexture for the application.
   * @param {number} texture - The 3d texture of signal strength.
   * @returns {void}
   */
  setDataTexture(texture) {
    if (this.uniforms.dataTexture.value)
      this.uniforms.dataTexture.value.dispose();
    this.uniforms.dataTexture.value = texture;
  }
}

export default VolumeRenderingMaterial;
