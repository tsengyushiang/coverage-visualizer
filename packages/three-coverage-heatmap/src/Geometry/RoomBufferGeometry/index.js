import * as THREE from "three";

const getWorldUvBoxGeometry = ({
  width,
  height,
  depth,
  center,
  quaternion,
}) => {
  const frontPlane = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 0],
    [0, 1],
  ];
  const BackPlane = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
    [0, 1],
    [1, 0],
  ];

  const offset = new THREE.Vector3(-width / 2, -height / 2, -depth / 2);
  const vertices = [
    ...frontPlane.flatMap((v) =>
      new THREE.Vector3()
        .fromArray([v[0] * width, height, v[1] * depth])
        .add(offset)
        .applyQuaternion(quaternion)
        .add(center)
        .toArray()
    ),
    ...frontPlane.flatMap((v) =>
      new THREE.Vector3()
        .fromArray([v[0] * width, v[1] * height, 0])
        .add(offset)
        .applyQuaternion(quaternion)
        .add(center)
        .toArray()
    ),
    ...frontPlane.flatMap((v) =>
      new THREE.Vector3()
        .fromArray([0, v[0] * height, v[1] * depth])
        .add(offset)
        .applyQuaternion(quaternion)
        .add(center)
        .toArray()
    ),
    ...BackPlane.flatMap((v) =>
      new THREE.Vector3()
        .fromArray([v[0] * width, 0, v[1] * depth])
        .add(offset)
        .applyQuaternion(quaternion)
        .add(center)
        .toArray()
    ),
    ...BackPlane.flatMap((v) =>
      new THREE.Vector3()
        .fromArray([v[0] * width, v[1] * height, depth])
        .add(offset)
        .applyQuaternion(quaternion)
        .add(center)
        .toArray()
    ),
    ...BackPlane.flatMap((v) =>
      new THREE.Vector3()
        .fromArray([width, v[0] * height, v[1] * depth])
        .add(offset)
        .applyQuaternion(quaternion)
        .add(center)
        .toArray()
    ),
  ];

  const gridUvs = [
    ...frontPlane.flatMap(([u, v]) => [u * width, v * depth]),
    ...frontPlane.flatMap(([u, v]) => [u * width, v * height]),
    ...frontPlane.flatMap(([u, v]) => [u * height, v * depth]),
    ...BackPlane.flatMap(([u, v]) => [u * width, v * depth]),
    ...BackPlane.flatMap(([u, v]) => [u * width, v * height]),
    ...BackPlane.flatMap(([u, v]) => [u * height, v * depth]),
  ];

  const uvIndices = [
    ...[0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
    ...[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    ...[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],

    ...[0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    ...[0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    ...[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  ];

  return { vertices, gridUvs, uvIndices };
};

/**
 * Represents a room with control over its features like walls, doors, furniture and signals.
 * @class
 * @extends THREE.BufferGeometry
 */
class RoomBufferGeometry extends THREE.BufferGeometry {
  constructor() {
    super();
    this.aabbArray = [];
    this.PLANE_THICKNESS = 8e-2;
    this.planeArray = [];
  }

  _updateGeometry() {
    const aabbs = this.aabbArray.map(([min, max]) => {
      const width = Math.abs(max[0] - min[0]);
      const height = Math.abs(max[1] - min[1]);
      const depth = Math.abs(max[2] - min[2]);

      const center = new THREE.Vector3(
        (max[0] + min[0]) / 2,
        (max[1] + min[1]) / 2,
        (max[2] + min[2]) / 2
      );

      const { vertices, gridUvs, uvIndices } = getWorldUvBoxGeometry({
        width,
        height,
        depth,
        center,
        quaternion: new THREE.Quaternion(0, 0, 0, 1),
      });

      const uv = [
        [min[3], max[3]],
        [min[4], max[4]],
      ];
      const uvs = uvIndices.map((u, index) => uv[index % 2][u]);

      return {
        vertices,
        gridUvs,
        uvs,
      };
    });
    const aabbVertices = aabbs.flatMap((aabb) => aabb.vertices);
    const aabbGridUvs = aabbs.flatMap((aabb) => aabb.gridUvs);
    const aabbUvs = aabbs.flatMap((aabb) => aabb.uvs);

    const planes = this.planeArray.map(([min, max]) => {
      const rotationMat = new THREE.Matrix4().lookAt(
        new THREE.Vector3(min[0], 0, min[2]),
        new THREE.Vector3(max[0], 0, max[2]),
        new THREE.Vector3(0, 1, 0)
      );
      const quaternion = new THREE.Quaternion().setFromRotationMatrix(
        rotationMat
      );

      const depth = new THREE.Vector2(
        max[0] - min[0],
        max[2] - min[2]
      ).length();
      const height = max[1] - min[1];

      const center = new THREE.Vector3(
        (max[0] + min[0]) / 2,
        (max[1] + min[1]) / 2,
        (max[2] + min[2]) / 2
      );

      const { vertices, gridUvs, uvIndices } = getWorldUvBoxGeometry({
        width: this.PLANE_THICKNESS,
        height,
        depth,
        center,
        quaternion,
      });

      const uv = [
        [min[3], max[3]],
        [min[4], max[4]],
      ];
      const uvs = uvIndices.map((u, index) => uv[index % 2][u]);

      return {
        vertices,
        gridUvs,
        uvs,
      };
    });
    const planeVertices = planes.flatMap((plane) => plane.vertices);
    const planeGridUvs = planes.flatMap((plane) => plane.gridUvs);
    const planeUvs = planes.flatMap((plane) => plane.uvs);

    this.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([...aabbVertices, ...planeVertices]),
        3
      )
    );

    this.setAttribute(
      "gridUv",
      new THREE.BufferAttribute(
        new Float32Array([...aabbGridUvs, ...planeGridUvs]),
        2
      )
    );

    this.setAttribute(
      "uv",
      new THREE.BufferAttribute(new Float32Array([...aabbUvs, ...planeUvs]), 2)
    );

    this.computeBoundingSphere();
  }

  /**
   * Sets the Axis-Aligned Bounding Box (AABB) data.
   * @param {Array<Vector.Vector3Pair>} data An array containing two elements, each representing a start and end vector, both three-dimensional.
   * @example
   * roomBufferGeometry.setAABB([
   *   [[0, 0, 0], [1, 1, 1]]
   * ]);
   */
  setAABB(data) {
    if (!data) return;
    this.aabbArray = data;
    this._updateGeometry();
  }

  /**
   * Sets the plane data.
   * @param {Array<Vector.Vector3Pair>} data An array containing two elements, each representing a start and end vector, both three-dimensional.
   * @example
   * roomBufferGeometry.setPlane([
   *   [[0, 0, 0], [1, 1, 1]]
   * ]);
   */
  setPlane(data) {
    if (!data) return;
    this.planeArray = data;
    this._updateGeometry();
  }
}

export default RoomBufferGeometry;
