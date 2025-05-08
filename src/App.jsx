import React, { useEffect, useMemo, useRef, useState } from "react";
import Renderer from "react-coverage-heatmap";
import doc from "./assets/doc.svg";
import github from "./assets/github.svg";
import floorplan from "./assets/floorplan.png";

const SignalConfig = ({
  power,
  channel,
  onPowerChanged,
  onChannelChange,
  isMoving,
  setIsMoving,
  onDelete,
  id,
}) => {
  return (
    <div
      onPointerMove={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      style={{
        gap: "10px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <span>{`Id- ${id}`}</span>
      <button onClick={onDelete}>Delete</button>
      <label htmlFor={`power`}>{`Power: ${power
        .toFixed(0)
        .padStart(2, 0)}`}</label>
      <InputRange
        id={`power`}
        min={1e-3}
        max={24}
        step={1e-1}
        onChange={onPowerChanged}
        value={power}
      />
      <label htmlFor={`channel`}>{`Channel: ${channel
        .toFixed(0)
        .padStart(2, 0)}`}</label>
      <InputRange
        id={`channel`}
        min={1}
        max={14}
        step={1}
        onChange={onChannelChange}
        value={channel}
      />
      <span>Position</span>
      <button onClick={() => setIsMoving((prev) => !prev)}>
        {isMoving ? "OK" : "Edit"}
      </button>
    </div>
  );
};

const InputRange = (props) => {
  return (
    <input
      style={{
        width: "70px",
      }}
      type="range"
      {...props}
    />
  );
};

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
const textCoordScale = [1 / 20, 1 / 20];
const textCoordsOffset = [0.5, 0.5];

const App = () => {
  const threeRef = useRef(null);
  const [focusId, setFocusId] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
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
  const [signalChannels, setSignalChannels] = useState([1, 6]);
  const [signals, setSignals] = useState([
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

  const onChannelChange = (index) => (e) => {
    const value = parseInt(e.target.value);
    const copy = [...signalChannels];
    copy[index] = value;
    setSignalChannels(copy);
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

  const updateSignal = (e) => {
    const rect = e.target.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width;
    const normalizedY = (event.clientY - rect.top) / rect.height;

    const target = threeRef.current.getWorldPositionFromScreen([
      normalizedX,
      normalizedY,
    ]);

    if (!target) return;

    setSignals((prev) => {
      const result = [...prev];
      result[focusId] = target;
      return result;
    });
  };

  const channels = useMemo(
    () => signalChannels.map((channel) => channel / 14),
    [signalChannels]
  );

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onPointerDown={(e) => {
        if (!isMoving) return;
        if (!(e.target instanceof HTMLCanvasElement)) return;

        updateSignal(e);
        setIsMoving(false);
      }}
      onPointerMove={(e) => {
        if (!isMoving) return;
        if (!(e.target instanceof HTMLCanvasElement)) return;
        updateSignal(e);
      }}
    >
      <Renderer
        ref={threeRef}
        texture={floorplan}
        textCoordScale={textCoordScale}
        textCoordsOffset={textCoordsOffset}
        isPointcloud={isPointcloud}
        isIsosurface={isIsosurface}
        isVolumeRendering={isVolumeRendering}
        isRealTimeVolumeRendering={isRealTimeVolumeRendering}
        isoValue={isoValue}
        isHeatmapColor={isHeatmapColor}
        isSignalIndex={isSignalIndex}
        signalIntensities={signalIntensities}
        signalChannels={channels}
        signals={signals}
        aabbs={aabbs}
        planes={planes}
        labels={labels}
      >
        {labelPosition.map((label, index) => {
          return (
            <div
              onPointerMove={(e) => e.stopPropagation()}
              onPointerDown={() => setFocusId(focusId === index ? null : index)}
              key={index}
              style={{
                userSelect: "none",
                pointerEvents: focusId === index && isMoving ? "none" : "auto",
                position: "absolute",
                left: `${label[0] * 100}%`,
                top: `${label[1] * 100}%`,
                border: `1px solid ${focusId === index ? "red" : "gray"}`,
                transform: "translate(-50%, -50%)",
                background:
                  focusId === index && isMoving
                    ? "rgba(255, 0, 0, 0.4)"
                    : "rgba(255, 255, 255, 0.8)",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>{index}</span>
            </div>
          );
        })}
      </Renderer>
      <div
        onPointerMove={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          right: "0",
          top: "0",
          gap: "10px",
          padding: "10px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => {
            setSignalIntensities((prev) => [...prev, 10]);
            setSignalChannels((prev) => [...prev, 6]);
            setSignals((prev) => [...prev, [0, 0, 0]]);
            setFocusId(signals.length);
            setIsMoving(true);
          }}
        >
          Add New Signal
        </button>
        {Number.isInteger(focusId) && (
          <SignalConfig
            id={focusId}
            onDelete={() => {
              const idMatched = (prev) =>
                prev.filter((_, index) => index !== focusId);
              setSignalIntensities(idMatched);
              setSignalChannels(idMatched);
              setSignals(idMatched);
              setLabelPosition([]);
              setIsMoving(false);
              setFocusId(null);
            }}
            power={signalIntensities[focusId]}
            channel={signalChannels[focusId]}
            onPowerChanged={onIntensityChange(focusId)}
            onChannelChange={onChannelChange(focusId)}
            isMoving={isMoving}
            setIsMoving={setIsMoving}
          />
        )}
      </div>

      <div
        style={{
          position: "fixed",
          left: "0",
          top: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <a href={"https://github.com/yushiang-demo/coverage-visualizer"}>
          <img width="40px" src={github} />
        </a>
        <a href={"./doc/"}>
          <img width="40px" src={doc} />
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
          background: "rgba(255, 255, 255, 0.8)",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px",
        }}
      >
        <div>
          <h4>Visualization</h4>
          <input
            type="checkbox"
            id={"heatmapColor"}
            onChange={(e) => setIsHeatmapColor(e.target.checked)}
            checked={isHeatmapColor}
          />
          <label htmlFor="heatmapColor">Heatmap</label>
          <br />
          <input
            type="checkbox"
            id={"signalIndex"}
            onChange={(e) => setIsSignalIndex(e.target.checked)}
            checked={isSignalIndex}
          />
          <label htmlFor="signalIndex">Index map</label>
          <br />
          <input
            type="checkbox"
            id={"pointcloud"}
            onChange={(e) => setIsPointcloud(e.target.checked)}
            checked={isPointcloud}
          />
          <label htmlFor="pointcloud">Pointcloud</label>
          <br />
          <input
            type="checkbox"
            id={"isosurface"}
            onChange={(e) => setIsIsosurface(e.target.checked)}
            checked={isIsosurface}
          />
          <label htmlFor="isosurface">Isosurface</label>
          <InputRange
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
            id={"VolumeRendering"}
            onChange={(e) => setIsVolumeRendering(e.target.checked)}
            checked={isVolumeRendering}
          />
          <label htmlFor="VolumeRendering">Volume Rendering</label>
          <br />
          <input
            type="checkbox"
            id={"RealTimeVolumeRendering"}
            onChange={(e) => setIsRealTimeVolumeRendering(e.target.checked)}
            checked={isRealTimeVolumeRendering}
          />
          <label htmlFor="RealTimeVolumeRendering">
            Real-Time Volume Rendering
          </label>
        </div>
        <div>
          <h4>Layout</h4>
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
          <InputRange
            id={"door"}
            min={1e-3}
            max={1}
            step={1e-2}
            onChange={(e) => setDoorPercentage(e.target.value)}
            value={doorPercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
