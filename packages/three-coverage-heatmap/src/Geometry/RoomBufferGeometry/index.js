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

  const uvs = [
    ...frontPlane.flatMap(([u, v]) => [u * width, v * depth]),
    ...frontPlane.flatMap(([u, v]) => [u * width, v * height]),
    ...frontPlane.flatMap(([u, v]) => [u * height, v * depth]),
    ...BackPlane.flatMap(([u, v]) => [u * width, v * height]),
    ...BackPlane.flatMap(([u, v]) => [u * height, v * depth]),
  ];
  return { vertices, uvs };
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
    this.width = 0;
    this.length = 0;
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

      const { vertices, uvs } = getWorldUvBoxGeometry({
        width,
        height,
        depth,
        center,
        quaternion: new THREE.Quaternion(0, 0, 0, 1),
      });

      return {
        vertices,
        uvs,
      };
    });
    const aabbVertices = aabbs.flatMap((aabb) => aabb.vertices);
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

      const { vertices, uvs } = getWorldUvBoxGeometry({
        width: this.PLANE_THICKNESS,
        height,
        depth,
        center,
        quaternion,
      });

      return {
        vertices,
        uvs,
      };
    });
    const planeVertices = planes.flatMap((plane) => plane.vertices);
    const planeUvs = planes.flatMap((plane) => plane.uvs);

    const { floorVertices, floorUvs } = (() => {
      const floorVertices = [
        [1, 0, 1],
        [1, 0, -1],
        [-1, 0, 1],
        [1, 0, -1],
        [-1, 0, -1],
        [-1, 0, 1],
      ]
        .flatMap(([x, y, z]) => [
          (x * this.width) / 2,
          y,
          (z * this.length) / 2,
        ])
        .flat();

      const floorUvs = [
        [1, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 0],
        [0, 1],
      ]
        .flatMap(([x, z]) => [x * this.width, z * this.length])
        .flat();

      return { floorVertices, floorUvs };
    })();

    this.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([...floorVertices, ...aabbVertices, ...planeVertices]),
        3
      )
    );

    this.setAttribute(
      "uv",
      new THREE.BufferAttribute(
        new Float32Array([...floorUvs, ...aabbUvs, ...planeUvs]),
        2
      )
    );
  }

  /**
   * Sets the floor size.
   * @param {number} width The width of the room.
   * @param {number} length The length of the room.
   * @example
   * roomBufferGeometry.setFloor(20, 20);
   */
  setFloor(width, length) {
    this.width = width;
    this.length = length;
    this._updateGeometry();
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
