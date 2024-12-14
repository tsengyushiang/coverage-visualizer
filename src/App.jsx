import React, { useEffect, useState } from "react";
import Renderer from "react-coverage-heatmap";

const wallsAABBs = [
  [
    [1.02, 0, -10],
    [1.45, 3, 1.2],
  ],
  [
    [-4.6, 0, 0.73],
    [1.02, 3, 1.2],
  ],
  [
    [-9.55, 0, 0.73],
    [-7.1, 3, 1.2],
  ],
  [
    [3.85, 0, -10],
    [4.25, 3, -4],
  ],
  [
    [3.85, 0, -0.6],
    [4.25, 3, 0.55],
  ],
  [
    [4.25, 0, 0.12],
    [8.34, 3, 0.55],
  ],
  [
    [-9.65, 0, 8.2],
    [-6.8, 3, 8.7],
  ],
  [
    [-3.75, 0, 8.2],
    [2.5, 3, 8.7],
  ],
  [
    [5.55, 0, 8.2],
    [8.34, 3, 8.7],
  ],
  [
    [1.02, 3, -10],
    [-9.65, 0, -9.55],
  ],
  [
    [8.34, 3, -10],
    [4.25, 0, -9.55],
  ],
  [
    [-10.0, 3, 8.7],
    [-9.55, 0, -10],
  ],
  [
    [8.34, 0, -10],
    [8.75, 3, 8.7],
  ],
];

const furnitureAABBs = [
  [
    // sofa seat
    [-5.1, 0, 2.2],
    [-3.1, 0.3, 7.35],
  ],
  [
    // sofa back
    [-3.1, 0, 2.2],
    [-2.5, 1.0, 7.35],
  ],
  [
    // table
    [1.45, 0.8, 2.5],
    [4, 1.0, 5.2],
  ],
  [
    // bed
    [-2.1, 1.0, -9.55],
    [-8.4, 0, -3.5],
  ],
  [
    //cabinet
    [1.02, 1.0, -9.55],
    [-0.75, 0, -2.9],
  ],
];

const getPlanes = (percentage) => {
  const MAX_ANGLE = 0;
  const MIN_ANGLE = -Math.PI / 2 + 1e-1;

  const MAX_LENGTH = -1.7;
  const MIN_LENGTH = 0;

  return [
    [
      [
        -7.1 +
          2.5 * Math.cos(MAX_ANGLE * percentage + MIN_ANGLE * (1 - percentage)),
        0,
        0.73 +
          2.5 * Math.sin(MAX_ANGLE * percentage + MIN_ANGLE * (1 - percentage)),
      ],
      [-7.1, 3, 0.73],
    ],
    [
      [4.05, 0, -0.6],
      [4.05, 3, -0.6 + MAX_LENGTH * percentage + MIN_LENGTH * (1 - percentage)],
    ],
    [
      [-6.8, 0, 8.5],
      [-3.75, 3, 8.5],
    ],
    [
      [2.5, 0, 8.5],
      [5.55, 3, 8.5],
    ],
  ];
};
const App = () => {
  const [isPointcloud, setIsPointcloud] = useState(false);
  const [isIsosurface, setIsIsosurface] = useState(false);
  const [labelPosition, setLabelPosition] = useState([]);
  const [isVolumeRendering, setIsVolumeRendering] = useState(false);
  const [isRealTimeVolumeRendering, setIsRealTimeVolumeRendering] =
    useState(false);
  const [isHeatmapColor, setIsHeatmapColor] = useState(false);
  const [isSignalIndex, setIsSignalIndex] = useState(false);
  const [hasFurniture, setHasFurniture] = useState(true);
  const [hasWall, setHasWall] = useState(true);
  const [doorPercentage, setDoorPercentage] = useState(0.5);
  const [isoValue, setIsoValue] = useState(0.5);

  const [signalIntensities, setSignalIntensities] = useState([10, 10]);
  const [signals] = useState([
    [0, 1.1, -4],
    [0, 2.0, 8.1],
  ]);
  const [aabbs, setAABBs] = useState([]);
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    let arr = [];
    if (hasFurniture) {
      arr = [...arr, ...furnitureAABBs];
    }
    if (hasWall) {
      arr = [...arr, ...wallsAABBs];
    }
    setAABBs(arr);
  }, [hasFurniture, hasWall]);

  useEffect(() => {
    setPlanes(getPlanes(doorPercentage));
  }, [doorPercentage]);

  const onIntensityChange = (index) => (e) => {
    const value = parseFloat(e.target.value);
    const copy = [...signalIntensities];
    copy[index] = value;
    setSignalIntensities(copy);
  };

  const labels = signals.map((signal, index) => {
    return {
      position: signal,
      onViewportChange: (x, y) =>
        setLabelPosition((prev) => {
          const copy = [...prev];
          copy[index] = [x, y];
          return copy;
        }),
    };
  });

  return (
    <>
      <Renderer
        texture={"./floorplan.png"}
        textCoordScale={[1 / 20, 1 / 20]}
        textCoordSoffset={[0.5, 0.5]}
        isPointcloud={isPointcloud}
        isIsosurface={isIsosurface}
        isVolumeRendering={isVolumeRendering}
        isRealTimeVolumeRendering={isRealTimeVolumeRendering}
        isoValue={isoValue}
        isHeatmapColor={isHeatmapColor}
        isSignalIndex={isSignalIndex}
        signalIntensities={signalIntensities}
        signals={signals}
        aabbs={aabbs}
        planes={planes}
        labels={labels}
      >
        {labelPosition.map((label, index) => {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: `${label[0] * 100}%`,
                top: `${label[1] * 100}%`,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid gray",
                borderRadius: "20px 20px 20px 0px",
                padding: "10px",
                height: "47px",
                transform: "translate(0%, -100%)",
                background: "#ffffff36",
              }}
            >
              <label htmlFor={`signal${index}`}>{`Signal Strength`}</label>
              <input
                type="range"
                id={`signal${index}`}
                min={1e-3}
                max={30}
                step={1e-1}
                onChange={onIntensityChange(index)}
                value={signalIntensities[index]}
              />
              <br />
            </div>
          );
        })}
      </Renderer>
      <div
        style={{
          position: "fixed",
          right: "0",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <a href={"/"}>
          <img width="40px" src="./github.svg" />
        </a>
        <a href={"./doc/"}>
          <img width="40px" src="./doc.svg" />
        </a>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          padding: "20px",
          margin: "10px",
          border: "1px solid gray",
          borderRadius: "10px",
          background: "#ffffff36",
        }}
      >
        <input
          type="checkbox"
          id={"heatmapColor"}
          onChange={(e) => setIsHeatmapColor(e.target.checked)}
          checked={isHeatmapColor}
        />
        <label htmlFor="heatmapColor">show heatmap</label>
        <br />
        <input
          type="checkbox"
          id={"signalIndex"}
          onChange={(e) => setIsSignalIndex(e.target.checked)}
          checked={isSignalIndex}
        />
        <label htmlFor="signalIndex">show signal index map</label>
        <br />
        <input
          type="checkbox"
          id={"pointcloud"}
          onChange={(e) => setIsPointcloud(e.target.checked)}
          checked={isPointcloud}
        />
        <label htmlFor="pointcloud">show pointcloud</label>
        <br />
        <input
          type="checkbox"
          id={"isosurface"}
          onChange={(e) => setIsIsosurface(e.target.checked)}
          checked={isIsosurface}
        />
        <label htmlFor="isosurface">show isosurface</label>
        <br />
        <input
          type="checkbox"
          id={"VolumeRendering"}
          onChange={(e) => setIsVolumeRendering(e.target.checked)}
          checked={isVolumeRendering}
        />
        <label htmlFor="VolumeRendering">show Volume Rendering</label>
        <br />
        <input
          type="checkbox"
          id={"RealTimeVolumeRendering"}
          onChange={(e) => setIsRealTimeVolumeRendering(e.target.checked)}
          checked={isRealTimeVolumeRendering}
        />
        <label htmlFor="RealTimeVolumeRendering">
          show Real-Time Volume Rendering
        </label>
        <br />
        <label htmlFor="isoValue">isoValue</label>
        <input
          type="range"
          id={"isoValue"}
          min={0.2}
          max={1}
          step={1e-2}
          onChange={(e) => setIsoValue(e.target.value)}
          value={isoValue}
        />
        <br />
        <input
          type="checkbox"
          id={"wall"}
          onChange={(e) => setHasWall(e.target.checked)}
          checked={hasWall}
        />
        <label htmlFor="wall">has wall</label>
        <br />
        <input
          type="checkbox"
          id={"furniture"}
          onChange={(e) => setHasFurniture(e.target.checked)}
          checked={hasFurniture}
        />
        <label htmlFor="furniture">has furniture</label>
        <br />
        <label htmlFor="door">Door</label>
        <input
          type="range"
          id={"door"}
          min={1e-3}
          max={1}
          step={1e-2}
          onChange={(e) => setDoorPercentage(e.target.value)}
          value={doorPercentage}
        />
        <br />
      </div>
    </>
  );
};

export default App;
