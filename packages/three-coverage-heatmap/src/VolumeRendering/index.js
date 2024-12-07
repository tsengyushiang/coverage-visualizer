import * as THREE from "three";
import VolumeRenderingMaterial from "../Material/VolumeRenderingMaterial";

class VolumeRendering extends THREE.Mesh {
  constructor(samplesY, samplesXZ, sampleScale) {
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

    this._samplesY = samplesY;
    this._samplesXZ = samplesXZ;
    this._sampleScale = sampleScale;
    material.setUniforms({ volumeSize: sampleScale });
  }

  setUniforms(data) {
    this.material.setUniforms(data);
  }

  updateTexture3D(colors) {
    const textureData = new Array(this._samplesY)
      .fill(0)
      .flatMap((_, y) =>
        new Array(this._samplesXZ ** 2)
          .fill(0)
          .map((_, xz) => [
            xz % this._samplesXZ,
            y,
            Math.floor(xz / this._samplesXZ),
          ])
      )
      .map(([x, y, z]) => {
        const index = y * this._samplesXZ ** 2 + z * this._samplesXZ + x;
        return colors[index * 4];
      });
    const data = new Uint8Array(textureData);
    const texture = new THREE.Data3DTexture(
      data,
      this._samplesXZ,
      this._samplesXZ,
      this._samplesY
    );

    texture.format = THREE.RedFormat; // Our texture has only one channel (red).
    texture.type = THREE.UnsignedByteType; // The data type is 8 bit unsighed integer.
    texture.minFilter = THREE.LinearFilter; // Linear filter for minification.
    texture.magFilter = THREE.LinearFilter; // Linear filter for maximization.

    // Repeat edge values when sampling outside of texture boundaries.
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.wrapR = THREE.ClampToEdgeWrapping;

    // Mark texture for update so that the changes take effect.
    texture.needsUpdate = true;

    this.material.setDataTexture(texture);
  }

  setIsoValue(value) {
    this.material.setUniforms({ isoValue: value });
  }
}

export default VolumeRendering;
