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
    this._camera = null;
    this._raycaster = new THREE.Raycaster();
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

    this.volumeRenderingWoTexture3d = new VolumeRendering(
      samplesY,
      samplesXZ,
      samplesScale,
      true
    );

    this._billboardGroup = new THREE.Group();
    this._scene.add(this._billboardGroup);
  }

  _updateSamples() {
    if (!this._renderer) return;
    let colors = undefined;
    if (this.uniformSampler3D._points.parent) {
      if (!colors) colors = this.uniformSampler3D.sample(this._renderer);
    }
    if (this.isosurface.parent) {
      if (!colors) colors = this.uniformSampler3D.sample(this._renderer);
      this.isosurface.updateFromColors(colors);
    }
    if (this.volumeRendering.parent) {
      if (!colors) colors = this.uniformSampler3D.sample(this._renderer);
      this.volumeRendering.updateTexture3D(colors);
    }
  }

  _updateConfig(data) {
    this.heatmapMaterial.setUniforms(data);
    this.uniformSampler3D.setUniforms(data);
    this.volumeRendering.setUniforms(data);
    this.volumeRenderingWoTexture3d.setUniforms(data);
    this._updateSamples();
  }

  /**
   * Converts screen coordinates to world coordinates.
   * This method uses the screen position (normalized coordinates) to calculate a ray and find where it intersects the objects in the scene.
   * @param {Array<number>} data An array containing normalized screen coordinates [x, y], where x and y range from 0 to 1.
   * @returns {Array<number>} A 3D array [x, y, z] representing the world coordinates where the ray intersects an object.
   * @example
   * app.getWorldPositionFromScreen([0.5, 0.5]);
   */
  getWorldPositionFromScreen(data) {
    this._raycaster.setFromCamera(
      new THREE.Vector2().fromArray([data[0] * 2 - 1, -data[1] * 2 + 1]),
      this._camera
    );

    const intersects = this._raycaster.intersectObjects(
      this._scene.children,
      true
    );

    if (intersects.length > 0) {
      const target = intersects[0];
      return new THREE.Vector3()
        .addVectors(target.point, target.face.normal.multiplyScalar(1e-1))
        .toArray();
    }

    return null;
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
    data.forEach((position) => {
      const geometry = new THREE.SphereGeometry(0.1, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0,
        wireframe: true,
      });
      const accessPoint = new THREE.Mesh(geometry, material);
      accessPoint.position.fromArray(position);
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
      this._updateSamples();
    } else {
      this.uniformSampler3D._points.parent?.remove(
        this.uniformSampler3D._points
      );
    }
  }

  /**
   * Sets whether to show the real-time volume rendering or not.
   * @param {boolean} data A boolean value indicating whether to show the volume rendering.
   * @example
   * app.setIsRealTimeVolumeRendering(true);
   */
  setIsRealTimeVolumeRendering(data) {
    if (data) {
      this._scene.add(this.volumeRenderingWoTexture3d);
    } else {
      this.volumeRenderingWoTexture3d.parent?.remove(
        this.volumeRenderingWoTexture3d
      );
    }
  }

  /**
   * Sets whether to show the volume rendering or not.
   * @param {boolean} data A boolean value indicating whether to show the volume rendering.
   * @example
   * app.setIsVolumeRendering(true);
   */
  setIsVolumeRendering(data) {
    if (data) {
      this._scene.add(this.volumeRendering);
      this._updateSamples();
    } else {
      this.volumeRendering.parent?.remove(this.volumeRendering);
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
      this._updateSamples();
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
   * Sets the channel for each signal.
   * @param {Array<number>} data An array containing normalized channel values for each signal.
   * @example
   * app.setSignalChannels([0.2, 0.5, 0.8]);
   */
  setSignalChannels(data) {
    this._updateConfig({
      signalChannels: data,
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
   * Sets the floorplan used as a texture for 2D billboards.
   * @param {Array<{position: number[], onViewportChange: function(number, number): void}>} objects - An array of objects representing the 2D billboards.
   * Each object should have the following properties:
   * - position: {number[]} An array of three numbers [x, y, z] indicating the position of the billboard in 3D space.
   * - onViewportChange: {function(number, number): void} A callback function that receives the x and y screen coordinates when the viewport changes.
   *
   * @example
   * app.setBillboard([{position: [0, 0, 0], onViewportChange: (x, y) => console.log(x, y)}]);
   */
  setBillboard(objects) {
    this._billboardGroup.clear();
    objects.forEach((object) => {
      const mesh = new THREE.Mesh();
      mesh.frustumCulled = false;
      mesh.position.fromArray(object.position);
      mesh.onBeforeRender = (rendering, scene, camera) => {
        const coord = mesh.position.clone().project(camera);
        if (coord.z > 1) {
          object.onViewportChange(-1, -1);
        } else {
          object.onViewportChange(coord.x / 2 + 0.5, -coord.y / 2 + 0.5);
        }
      };
      this._billboardGroup.add(mesh);
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

    this._camera = camera;
    this._renderer = renderer;
    this._updateSamples();

    return {
      resizeCanvas,
      dispose,
    };
  }
}

export default App;
