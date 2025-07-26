import React, { forwardRef, useEffect, useRef } from "react";
import ThreeCoverageHeatmap from "three-coverage-heatmap";

const Renderer = (
  {
    texture,
    layouts,
    boundary,
    isPointcloud,
    isIsosurface,
    isVolumeRendering,
    isRealTimeVolumeRendering,
    isoValue,
    isHeatmapColor,
    isSignalIndex,
    signalIntensities,
    signalChannels,
    signals,
    labels,
    children,
  },
  ref
) => {
  const threeRef = useRef(new ThreeCoverageHeatmap(boundary));
  const divRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    threeRef.current.setLayouts(layouts);
  }, [layouts]);
  useEffect(() => {
    threeRef.current.setTexture(texture);
  }, [texture]);

  useEffect(() => {
    threeRef.current.setIsPointcloud(isPointcloud);
  }, [isPointcloud]);

  useEffect(() => {
    threeRef.current.setIsIsosurface(isIsosurface);
  }, [isIsosurface]);

  useEffect(() => {
    threeRef.current.setIsVolumeRendering(isVolumeRendering);
  }, [isVolumeRendering]);

  useEffect(() => {
    threeRef.current.setIsRealTimeVolumeRendering(isRealTimeVolumeRendering);
  }, [isRealTimeVolumeRendering]);

  useEffect(() => {
    threeRef.current.setIsoValue(isoValue);
  }, [isoValue]);

  useEffect(() => {
    threeRef.current.setIsHeatmapColor(isHeatmapColor);
  }, [isHeatmapColor]);

  useEffect(() => {
    threeRef.current.setIsSignalIndex(isSignalIndex);
  }, [isSignalIndex]);

  useEffect(() => {
    threeRef.current.setSignalIntensities(signalIntensities);
  }, [signalIntensities]);

  useEffect(() => {
    threeRef.current.setSignalChannels(signalChannels);
  }, [signalChannels]);

  useEffect(() => {
    threeRef.current.setSignal(signals);
  }, [signals]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { resizeCanvas, dispose } = threeRef.current.init(canvas);
    const onResize = () => {
      const viewportWidth = divRef.current.clientWidth;
      const viewportHeight = divRef.current.clientHeight;
      resizeCanvas(viewportWidth, viewportHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);

    if (ref) ref.current = threeRef.current;
    return () => {
      window.removeEventListener("resize", onResize);
      dispose();
    };
  }, []);

  useEffect(() => {
    threeRef.current.setBillboard(
      labels.map((labels) => {
        return {
          position: labels.position,
          onViewportChange: labels.onViewportChange,
        };
      })
    );
  }, [signals]);

  return (
    <div
      ref={divRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <canvas ref={canvasRef} />
      {children}
    </div>
  );
};

const RendererRef = forwardRef(Renderer);

export default RendererRef;
