import * as THREE from "three";
import { getVertexShader } from "./vertexShader";
import { getFragmentShader } from "./fragmentShader";

/**
 * Responsibles for rendering a heatmap visualization
 * based on the intensity of signals within a three-dimensional environment.
 * It provides a visually intuitive representation of signal strength,
 * allowing users to identify areas of high and low signal intensity.
 * @class
 * @extends THREE.ShaderMaterial
 */
class HeatmapMaterial extends THREE.ShaderMaterial {
  static _getUniformLimitation() {
    return {
      MAX_SIGNAL_COUNT: 15,
      MAX_AABB_COUNT: 50,
      MAX_PLANE_COUNT: 20,
    };
  }

  constructor() {
    const { MAX_SIGNAL_COUNT, MAX_AABB_COUNT, MAX_PLANE_COUNT } =
      HeatmapMaterial._getUniformLimitation();

    super({
      side: THREE.DoubleSide,
      uniforms: {
        isSignalIndex: {
          value: false,
        },
        map: {
          value: null,
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
   * @param {boolean} options.isSignalIndex - Indicates whether the uniform is for displaying the indexMap of coverage.
   * @param {number} options.planeCount - The count of planes.
   * @param {number} options.aabbCount - The count of axis-aligned bounding boxes.
   * @param {number} options.signalCount - The count of signals.
   * @param {Array<THREE.Vector3>} options.signals - An array containing signal data.
   * @param {Array<number>} options.signalIntensities - An array containing signal intensities.
   * @param {Array<THREE.Vector3>} options.aabbs - An array containing axis-aligned bounding box data.
   * @param {Array<THREE.Vector3>} options.planes - An array containing plane data.
   * @param {THREE.Texture} options.map - An object representing a map.
   * @returns {void}
   */
  setUniforms({
    isSignalIndex,
    planeCount,
    aabbCount,
    signalCount,
    signals,
    signalIntensities,
    aabbs,
    planes,
    map,
  }) {
    const { MAX_SIGNAL_COUNT, MAX_AABB_COUNT, MAX_PLANE_COUNT } =
      HeatmapMaterial._getUniformLimitation();

    const isDefined = (value) => value !== undefined;

    if (isDefined(isSignalIndex)) {
      this.uniforms.isSignalIndex.value = isSignalIndex;
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

    if (map) {
      this.uniforms.map.value = map;
    }
  }
}

export default HeatmapMaterial;
