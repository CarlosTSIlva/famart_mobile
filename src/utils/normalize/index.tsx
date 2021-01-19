import { Dimensions, PixelRatio } from "react-native";

export const { width } = Dimensions.get("window");

// based on Honor Play L29 scale
const scale: number = width / 409;

const normalize = (size: number): number => {
  const newSize = size * scale;

  return parseFloat(PixelRatio.roundToNearestPixel(newSize).toFixed(2));
};

export default normalize;
