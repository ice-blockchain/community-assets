"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselTwo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSnapCarousel = _interopRequireWildcard(require("react-native-snap-carousel"));
var _utils = require("../../utils");
var _index = require("../../assets/index");
var _colors = require("../../styles/colors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const carouselData = [{
  key: 'one',
  image: _index.landingAppImages.phone1
}, {
  key: 'two',
  image: _index.landingAppImages.phone2
}, {
  key: 'three',
  image: _index.landingAppImages.phone3
}, {
  key: 'four',
  image: _index.landingAppImages.phone4
}];
const ITEM_WIDTH = 240;
const CarouselTwo = () => {
  const carouselRef = (0, _react.useRef)(null);
  const [activeDotIndex, setActiveDotIndex] = (0, _react.useState)(1);
  const renderItem = (0, _react.useCallback)(_ref => {
    let {
      item
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: item.key,
      style: styles.item
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      style: styles.image,
      source: item.image,
      resizeMode: "contain"
    }));
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSnapCarousel.default, {
    ref: carouselRef,
    data: carouselData,
    renderItem: renderItem,
    sliderWidth: _utils.screenWidth,
    itemWidth: ITEM_WIDTH,
    vertical: false,
    onSnapToItem: setActiveDotIndex,
    inactiveSlideOpacity: 1,
    firstItem: 1
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSnapCarousel.Pagination, {
    dotsLength: carouselData.length,
    activeDotIndex: activeDotIndex,
    containerStyle: styles.paginationContainer,
    dotStyle: styles.dotStyle,
    inactiveDotStyle: styles.inactiveDot,
    inactiveDotOpacity: 1,
    inactiveDotScale: 1
  }));
};
exports.CarouselTwo = CarouselTwo;
const styles = _reactNative.StyleSheet.create({
  paginationContainer: {
    paddingTop: (0, _utils.rem)(14),
    paddingBottom: 0
  },
  container: {
    marginBottom: (0, _utils.rem)(100),
    marginTop: (0, _utils.rem)(40)
  },
  item: {
    alignItems: 'center'
  },
  image: {
    width: (0, _utils.rem)(220),
    height: (0, _utils.rem)(450)
  },
  dotStyle: {
    backgroundColor: _colors.COLORS.white
  },
  inactiveDot: {
    backgroundColor: _colors.COLORS.alto,
    opacity: 0.5
  }
});
//# sourceMappingURL=CarouselTwo.js.map