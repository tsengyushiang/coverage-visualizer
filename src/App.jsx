import React, { useEffect, useMemo, useRef, useState } from "react";
import Renderer from "react-coverage-heatmap";
import doc from "./assets/doc.svg";
import github from "./assets/github.svg";
import * as floor1 from "./data/floorplan";
import * as floor2 from "./data/floorplan2";

const SignalConfig = ({
  power,
  channel,
  onPowerChanged,
  onChannelChange,
  isMoving,
  setIsMoving,
  onDelete,
  id,
  position,
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
      <span>
        Position <br />
        {`(${position[0].toFixed(2)},${position[1].toFixed(
          2
        )},${position[2].toFixed(2)})`}
      </span>
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

const App = () => {
  const threeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [focusId, setFocusId] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [isPointcloud, setIsPointcloud] = useState(false);
  const [isIsosurface, setIsIsosurface] = useState(false);
  const [labelPosition, setLabelPosition] = useState([]);
  const [isVolumeRendering, setIsVolumeRendering] = useState(true);
  const [isRealTimeVolumeRendering, setIsRealTimeVolumeRendering] =
    useState(false);
  const [isHeatmapColor, setIsHeatmapColor] = useState(false);
  const [isSignalIndex, setIsSignalIndex] = useState(false);
  const [hasFurniture, setHasFurniture] = useState(true);
  const [hasWall, setHasWall] = useState(true);
  const [doorPercentage, setDoorPercentage] = useState(0.5);
  const [isoValue, setIsoValue] = useState(0.5);

  const [signalIntensities, setSignalIntensities] = useState([10, 10, 20, 10]);
  const [signalChannels, setSignalChannels] = useState([1, 6, 11, 1]);
  const [signals, setSignals] = useState([
    [-0.38, 2.2, -18.1],
    [-0.04, 1.1, -6.46],
    [-0.29, 2.73, 5.5],
    [-3.32, 2.59, 18.52],
  ]);
  const [layouts, setLayouts] = useState([]);

  useEffect(() => {
    const floors = [floor1, floor2];
    const position = [
      [0, 0, -10],
      [0, 0, 10],
    ];
    setLayouts(
      floors.map((floor, index) => {
        let arr = [];
        if (hasFurniture) {
          arr = [...arr, ...floor.furnitureAABBs];
        }
        if (hasWall) {
          arr = [...arr, ...floor.wallsAABBs];
        }
        return {
          aabbs: arr,
          planes: floor.getPlanes(doorPercentage),
          position: position[index],
        };
      })
    );
  }, [hasFurniture, hasWall, doorPercentage]);

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

  const textures = useMemo(() => [floor1.map, floor2.map], []);

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
        texture={textures}
        layouts={layouts}
        boundary={[20, 3, 40]}
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
        {signalIntensities.length < 30 && (
          <button
            onClick={() => {
              setSignalIntensities((prev) => [...prev, Math.random() * 24]);
              setSignalChannels((prev) => [...prev, 6]);
              setSignals((prev) => [
                ...prev,
                [
                  Math.random() * 20 - 10,
                  Math.random() * 3,
                  Math.random() * 20 - 10,
                ],
              ]);
              setFocusId(signals.length);
              setIsMoving(true);
            }}
          >
            Add a random signal
          </button>
        )}
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
            position={signals[focusId]}
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
          zIndex: "10",
          position: "fixed",
          bottom: "0px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid gray",
          pointer: "cursor",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
          margin: "5px",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{isOpen ? "×" : "⚙"}</span>
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
          transform: isOpen ? "none" : "translateY(120%)",
          transition: "1s",
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
