"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.screenWidth = exports.screenHeight = exports.rem = exports.isIOS = exports.heightPercentageToDP = exports.font = void 0;
var _reactNative = require("react-native");
const {
  height: screenHeight,
  width: screenWidth
} = _reactNative.Dimensions.get('window');
exports.screenWidth = screenWidth;
exports.screenHeight = screenHeight;
const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return _reactNative.PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
exports.heightPercentageToDP = heightPercentageToDP;
const isLandscape = screenWidth > screenHeight;
const base = isLandscape ? screenHeight : screenWidth;
const magicNumber = 375;
const rem = function () {
  let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Math.floor(base / magicNumber * size);
};
exports.rem = rem;
const font = size => {
  let cof = 1;
  if (base < magicNumber) {
    cof = base / magicNumber;
  }
  return Math.round(size * cof);
};
exports.font = font;
const isIOS = _reactNative.Platform.OS === 'ios';
exports.isIOS = isIOS;
//# sourceMappingURL=index.js.map