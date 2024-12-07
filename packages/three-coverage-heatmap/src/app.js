import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import HeatmapMaterial from "./Material/HeatmapMaterial";
import RoomBufferGeometry from "./Geometry/RoomBufferGeometry";
import Isosurface from "./Isosurface";
import VolumeRendering from "./VolumeRendering";
import UniformSampler3D from "./Isosurface/UniformSampler3D";

/** @class */
class App {
  constructor() {
    this._renderer = null;
    this._scene = new THREE.Scene();

    const sizeXZ = 20;
    const sizeY = 3;

    const samplesY = 4 ** 2;
    const samplesXZ = 25;
    const samplesScale = [sizeXZ, sizeY, sizeXZ];
    this.uniformSampler3D = new UniformSampler3D(
      samplesY,
      samplesXZ,
      samplesScale
    );
    this.isosurface = new Isosurface(samplesY, samplesXZ, samplesScale);

    this.heatmapMaterial = new HeatmapMaterial();
    this.roomGeometry = new RoomBufferGeometry();
    this.roomGeometry.setFloor(sizeXZ, sizeXZ);
    const room = new THREE.Mesh(this.roomGeometry, this.heatmapMaterial);
    this._scene.add(room);

    this.volumeRendering = new VolumeRendering(
      samplesY,
      samplesXZ,
      samplesScale
    );
    this._scene.add(this.volumeRendering);

    this._signalGroup = new THREE.Group();
    this._scene.add(this._signalGroup);
  }

  _updateSamples() {
    if (!this._renderer) return;
    const colors = this.uniformSampler3D.sample(this._renderer);
    this.isosurface.updateFromColors(colors);
    this.volumeRendering.updateTexture3D(colors);
  }

  _updateConfig(data) {
    this.heatmapMaterial.setUniforms(data);
    this.uniformSampler3D.setUniforms(data);
    this.volumeRendering.setUniforms(data);
    this._updateSamples();
  }

  /**
   * Sets a signal at specific positions in a 3D dimension.
   * @param {Array<Vector.Vector3>} data An array containing vectors representing positions in 3D space where signals are set.
   * @example
   * app.setSignal([
   *   [0, 0, 0],
   *   [1, 1, 1]
   * ]);
   */
  setSignal(data) {
    if (!data) return;
    this._signalGroup.clear();
    data.forEach((position) => {
      const geometry = new THREE.SphereGeometry(0.1, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0,
        wireframe: true,
      });
      const accessPoint = new THREE.Mesh(geometry, material);
      accessPoint.position.fromArray(position);
      this._signalGroup.add(accessPoint);
    });

    this._updateConfig({
      signalCount: data.length,
      signals: data.map((arr) => new THREE.Vector3().fromArray(arr)),
    });
  }

  /**
   * Sets the Axis-Aligned Bounding Box (AABB) data.
   * @param {Array<Vector.Vector3Pair>} data An array containing two elements, each representing a start and end vector, both three-dimensional.
   * @example
   * app.setAABB([
   *   [[0, 0, 0], [1, 1, 1]]
   * ]);
   */
  setAABB(data) {
    if (!data) return;
    this.roomGeometry.setAABB(data);
    this._updateConfig({
      aabbCount: data.length,
      aabbs: data.flatMap(([min, max]) => [
        new THREE.Vector3().fromArray(min),
        new THREE.Vector3().fromArray(max),
      ]),
    });
  }

  /**
   * Sets the plane data.
   * @param {Array<Vector.Vector3Pair>} data An array containing two elements, each representing a start and end vector, both three-dimensional.
   * @example
   * app.setPlane([
   *   [[0, 0, 0], [1, 1, 1]]
   * ]);
   */
  setPlane(data) {
    if (!data) return;
    this.roomGeometry.setPlane(data);
    this._updateConfig({
      planeCount: data.length * 2,
      planes: data.flatMap(([min, max]) => [
        new THREE.Vector3().fromArray(min),
        new THREE.Vector3().fromArray(max),
      ]),
    });
  }

  /**
   * Sets whether to show the pointclod or not.
   * @param {boolean} data A boolean value indicating whether to show the pointclod.
   * @example
   * app.setIsPointcloud(true);
   */
  setIsPointcloud(data) {
    if (data) {
      this._scene.add(this.uniformSampler3D._points);
    } else {
      this.uniformSampler3D._points.parent?.remove(
        this.uniformSampler3D._points
      );
    }
  }

  /**
   * Sets whether to show the isoSurface or not.
   * @param {boolean} data A boolean value indicating whether to show the isoSurface.
   * @example
   * app.setIsIsosurface(true);
   */
  setIsIsosurface(data) {
    if (data) {
      this._scene.add(this.isosurface);
    } else {
      this.isosurface.parent?.remove(this.isosurface);
    }
  }

  /**
   * Sets visuilizeation isoValue to show the isosurface.
   * @param {number} value A number in the range [0, 1.0] for the marching cubes algorithm to reconstruct the isosurface.
   * @example
   * app.setIsoValue(true);
   */
  setIsoValue(value) {
    this.isosurface.setIsoValue(value);
  }

  /**
   * Sets whether to show the heatmap or not.
   * @param {boolean} data A boolean value indicating whether to show the heatmap.
   * @example
   * app.setIsHeatmapColor(true);
   */
  setIsHeatmapColor(data) {
    this._updateConfig({
      isHeatmapColor: data,
    });
  }

  /**
   * Sets whether to show the indexMap or not.
   * @param {boolean} data A boolean value indicating whether to show the indexMap.
   * @example
   * app.setIsSignalIndex(true);
   */
  setIsSignalIndex(data) {
    this._updateConfig({
      isSignalIndex: data,
    });
  }

  /**
   * Sets the intensity for each signal.
   * @param {Array<number>} data An array containing intensity values for each signal.
   * @example
   * app.setSignalIntensities([0.2, 0.5, 0.8]);
   */
  setSignalIntensities(data) {
    this._updateConfig({
      signalIntensities: data,
    });
  }

  /**
   * Sets the floorplan used as a texture.
   * @param {string} url The URL of the floorplan image.
   * @param {Array<number>} scale - The scale factors to apply to the sampling coordinates.
   * @param {Array<number>} offset - The offsets for positioning the sampling coordinates.
   * @example
   * app.setTexture("https://example.com/floorplan.jpg", [1, 1], [0, 0]);
   */
  setTexture(url, scale, offset) {
    if (url) {
      const texture = new THREE.TextureLoader().load(url);
      this._updateConfig({
        map: texture,
      });
    }

    if (scale && offset)
      this._updateConfig({
        mapScale: new THREE.Vector2().fromArray(scale),
        mapOffset: new THREE.Vector2().fromArray(offset),
      });
  }

  /**
   * Initializes Three.js rendering on a given canvas element.
   * @param {HTMLCanvasElement} canvas The canvas element to bind Three.js rendering.
   * @returns {Object} An object containing two callbacks:
   * - resizeCanvas: A callback to resize the renderer when the size of the canvas changes.
   * - dispose: A callback to clear the rendering process if the canvas element is removed from the DOM.
   * @example
   * const canvasElement = document.getElementById('myCanvas');
   * const {resizeCanvas, dispose} = app.init(canvasElement);
   */
  init(canvas) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1e-3,
      1000
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(-10, 20, -10);
    controls.update();

    let frameIndex = 0;
    const animate = () => {
      frameIndex = requestAnimationFrame(animate);

      controls.update();

      renderer.render(this._scene, camera);
    };
    const dispose = () => {
      cancelAnimationFrame(frameIndex);
    };

    const resizeCanvas = (viewportWidth, viewportHeight) => {
      canvas.width = viewportWidth;
      canvas.height = viewportHeight;
      renderer.setSize(viewportWidth, viewportHeight);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    };

    animate();

    this._renderer = renderer;
    this._updateSamples();

    return {
      resizeCanvas,
      dispose,
    };
  }
}

export default App;
