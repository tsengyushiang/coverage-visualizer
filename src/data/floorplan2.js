import map from "../assets/floorplan2.png";

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
    [-8.49, 0.0, 0.29],
    [-7.9, 3, 9.66],
  ],
  [
    [-2.6, 0.0, 8.62],
    [-7.9, 3, 9.66],
  ],
  [
    [1.06, 0, 8.62],
    [2.12, 3, 9.53],
  ],
  [
    [1.67, 0, 8.62],
    [1.48, 3, -1.01],
  ],
  [
    [-7.92, 0, -3.83],
    [-8.48, 3, -9.43],
  ],
  [
    [1.57, 0, -8.52],
    [-8.48, 3, -9.43],
  ],
  [
    [3.41, 0, -8.52],
    [8.5, 3, -9.46],
  ],
  [
    [8.5, 0, -9.46],
    [7.94, 3, 9.54],
  ],
  [
    [7.94, 0, 9.54],
    [6.39, 3, 8.62],
  ],
  [
    [7.94, 0, -0.68],
    [3.5, 3, -1.02],
  ],
  [
    [1.87, 3, -1.02],
    [1.48, 0, -0.68],
  ],
  [
    [3.9, 0, -8.54],
    [3.69, 3, -4.07],
  ],
  [
    [3.9, 0, -1.0],
    [3.69, 3, -1.35],
  ],
  [
    [-0.19, 0, -8.5],
    [0.03, 3, -4.33],
  ],
].map(toUv);

const furnitureAABBs = [
  [
    [1.13, 0, -8.52],
    [0.02, 1.3, -4.33],
  ],
].map(toUv);

const getPlanes = (percentage) => {
  const MAX_ANGLE = 0;
  const MIN_ANGLE = -Math.PI / 2;

  return [
    [
      [
        1.87 +
          1.65 *
            Math.cos(
              MAX_ANGLE * percentage +
                MIN_ANGLE * (1 - percentage) +
                Math.PI / 2
            ),
        0,
        -0.85 +
          1.65 *
            Math.sin(
              MAX_ANGLE * percentage +
                MIN_ANGLE * (1 - percentage) +
                Math.PI / 2
            ),
      ],
      [1.87, 3, -0.85],
    ],
    [
      [
        3.8 +
          2.62 *
            Math.cos(MAX_ANGLE * percentage + MIN_ANGLE * (1 - percentage)),
        0,
        -1.45 +
          2.62 *
            Math.sin(MAX_ANGLE * percentage + MIN_ANGLE * (1 - percentage)),
      ],
      [3.8, 3, -1.45],
    ],
    [
      [-8.19, 0, 0.29],
      [-8.2, 3, -3.83],
    ],
    [
      [-2.6, 0, 9.085],
      [1.06, 3, 9.085],
    ],
    [
      [2.12, 0, 9.085],
      [6.37, 3, 9.085],
    ],
  ].map(toUv);
};

export { map, wallsAABBs, furnitureAABBs, getPlanes };
