import { Platform, PixelRatio, Dimensions } from 'react-native';
export const {
  height: screenHeight,
  width: screenWidth
} = Dimensions.get('window');
export const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
const isLandscape = screenWidth > screenHeight;
const base = isLandscape ? screenHeight : screenWidth;
const magicNumber = 375;
export const rem = function () {
  let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Math.floor(base / magicNumber * size);
};
export const font = size => {
  let cof = 1;
  if (base < magicNumber) {
    cof = base / magicNumber;
  }
  return Math.round(size * cof);
};
export const isIOS = Platform.OS === 'ios';
//# sourceMappingURL=index.js.map