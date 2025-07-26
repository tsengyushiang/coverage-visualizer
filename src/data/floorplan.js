import map from "../assets/floorplan.png";

const toUv = (wall) => {
  const scale = [20, 20];
  const offset = [0.5, 0.5];

  const sortedAABB = [
    [
      Math.min(wall[0][0], wall[1][0]),
      Math.min(wall[0][1], wall[1][1]),
      Math.min(wall[0][2], wall[1][2]),
    ],
    [
      Math.max(wall[0][0], wall[1][0]),
      Math.max(wall[0][1], wall[1][1]),
      Math.max(wall[0][2], wall[1][2]),
    ],
  ];

  return [
    [
      sortedAABB[0][0],
      sortedAABB[0][1],
      sortedAABB[0][2],
      sortedAABB[0][0] / scale[0] + offset[0],
      sortedAABB[0][2] / scale[1] + offset[1],
    ],
    [
      sortedAABB[1][0],
      sortedAABB[1][1],
      sortedAABB[1][2],
      sortedAABB[1][0] / scale[0] + offset[0],
      sortedAABB[1][2] / scale[1] + offset[1],
    ],
  ];
};

const wallsAABBs = [
  [
    [-10, -0.1, -10],
    [10, 0, 10],
  ],
  [
    [1.02, 0, 10],
    [1.45, 3, -1.2],
  ],
  [
    [-4.6, 0, -0.73],
    [1.02, 3, -1.2],
  ],
  [
    [-9.55, 0, -0.73],
    [-7.1, 3, -1.2],
  ],
  [
    [3.85, 0, 10],
    [4.25, 3, 4],
  ],
  [
    [3.85, 0, 0.6],
    [4.25, 3, -0.55],
  ],
  [
    [4.25, 0, -0.12],
    [8.34, 3, -0.55],
  ],
  [
    [-9.65, 0, -8.2],
    [-6.8, 3, -8.7],
  ],
  [
    [-3.75, 0, -8.2],
    [2.5, 3, -8.7],
  ],
  [
    [5.55, 0, -8.2],
    [8.34, 3, -8.7],
  ],
  [
    [1.02, 3, 10],
    [-9.65, 0, 9.55],
  ],
  [
    [8.34, 3, 10],
    [4.25, 0, 9.55],
  ],
  [
    [-10.0, 3, -8.7],
    [-9.55, 0, 10],
  ],
  [
    [8.34, 0, 10],
    [8.75, 3, -8.7],
  ],
].map(toUv);

const furnitureAABBs = [
  [
    // sofa seat
    [-5.1, 0, -2.2],
    [-3.1, 0.3, -7.35],
  ],
  [
    // sofa back
    [-3.1, 0, -2.2],
    [-2.5, 1.0, -7.35],
  ],
  [
    // table
    [1.45, 0.8, -2.5],
    [4, 1.0, -5.2],
  ],
  [
    // bed
    [-8.4, 0, 3.5],
    [-2.1, 1.0, 9.55],
  ],
  [
    //cabinet
    [-0.75, 0, 2.9],
    [1.02, 1.0, 9.55],
  ],
].map(toUv);

const getPlanes = (percentage) => {
  const MAX_ANGLE = 0;
  const MIN_ANGLE = Math.PI / 2 + 1e-1;

  const MAX_LENGTH = 1.7;
  const MIN_LENGTH = 0;

  return [
    [
      [
        -7.1 +
          2.5 * Math.cos(MAX_ANGLE * percentage + MIN_ANGLE * (1 - percentage)),
        0,
        -0.73 +
          2.5 * Math.sin(MAX_ANGLE * percentage + MIN_ANGLE * (1 - percentage)),
      ],
      [-7.1, 3, -0.73],
    ],
    [
      [4.05, 0, 0.6],
      [4.05, 3, 0.6 + MAX_LENGTH * percentage + MIN_LENGTH * (1 - percentage)],
    ],
    [
      [-6.8, 0, -8.5],
      [-3.75, 3, -8.5],
    ],
    [
      [2.5, 0, -8.5],
      [5.55, 3, -8.5],
    ],
  ].map(toUv);
};

export { map, wallsAABBs, furnitureAABBs, getPlanes };
