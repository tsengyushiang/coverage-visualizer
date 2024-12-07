import * as THREE from "three";
import { getVertexShader } from "./vertexShader";
import { getFragmentShader } from "./fragmentShader";

/**
 * Responsibles for Volume Rendering
 * @class
 * @extends THREE.ShaderMaterial
 */
class VolumeRenderingMaterial extends THREE.ShaderMaterial {
  static _getUniformLimitation() {
    return {
      MAX_SIGNAL_COUNT: 15,
      MAX_AABB_COUNT: 25,
      MAX_PLANE_COUNT: 80,
    };
  }

  constructor() {
    const { MAX_SIGNAL_COUNT, MAX_AABB_COUNT, MAX_PLANE_COUNT } =
      VolumeRenderingMaterial._getUniformLimitation();

    super({
      transparent: true,
      uniforms: {
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
      fragmentShader: getFragmentShader(
        MAX_SIGNAL_COUNT,
        MAX_AABB_COUNT,
        MAX_PLANE_COUNT
      ),
    });
  }

  /**
   * Sets uniforms for the application.
   * @param {Object} options - An object containing various uniform parameters.
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
}

export default VolumeRenderingMaterial;
