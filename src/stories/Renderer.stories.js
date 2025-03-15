import Renderer from "./Renderer";
import { wallsAABBs, furnitureAABBs, getPlanes } from "./data";

export default {
  title: "react-coverage-heatmap/Renderer",
  tags: ["autodocs"],
  component: Renderer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isoValue: { control: { type: "range", min: 0.2, max: 1.0, step: 1e-2 } },
  },
};

const args = {
  texture: "./floorplan.png",
  textCoordScale: [1 / 20, 1 / 20],
  textCoordSoffset: [0.5, 0.5],
  isSignalIndex: false,
  isPointcloud: false,
  isIsosurface: false,
  isoValue: 0.5,
  isHeatmapColor: true,
  signalIntensities: [10, 10],
  signals: [
    [0, 1.1, -4],
    [0, 2.0, 8.1],
  ],
  aabbs: [...wallsAABBs, ...furnitureAABBs],
  planes: getPlanes(0.8),
  labels: [],
};

export const Texture = {
  args: {
    ...args,
    isHeatmapColor: false,
  },
};

export const Pointcloud = {
  args: {
    ...args,
    isPointcloud: true,
    isHeatmapColor: false,
  },
};

export const Isosurface = {
  args: {
    ...args,
    isIsosurface: true,
    isoValue: 0.5,
    isHeatmapColor: false,
  },
};

export const VolumeRendering = {
  args: {
    ...args,
    isVolumeRendering: true,
    isoValue: 0.5,
    isHeatmapColor: false,
  },
};

export const RealTimeVolumeRendering = {
  args: {
    ...args,
    isRealTimeVolumeRendering: true,
    isoValue: 0.5,
    isHeatmapColor: false,
  },
};

export const Heatmap = {
  args: {
    ...args,
    isHeatmapColor: true,
  },
};

export const HeatmapWoDoor = {
  args: {
    ...args,
    isHeatmapColor: true,
    planes: [],
  },
};

export const HeatmapWoFurniture = {
  args: {
    ...args,
    isHeatmapColor: true,
    aabbs: [...wallsAABBs],
  },
};

export const IndexMap = {
  args: {
    ...args,
    isSignalIndex: true,
  },
};
