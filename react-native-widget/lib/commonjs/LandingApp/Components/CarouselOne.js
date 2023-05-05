"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselOne = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSnapCarousel = _interopRequireWildcard(require("react-native-snap-carousel"));
var _utils = require("../../utils");
var _fonts = require("../../styles/fonts");
var _colors = require("../../styles/colors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CarouselOne = _ref => {
  let {
    translations
  } = _ref;
  const carouselData = [{
    title: translations.carousel_items.one.title,
    description: translations.carousel_items.one.description,
    size: {
      width: (0, _utils.rem)(76),
      height: (0, _utils.rem)(80)
    },
    icon: require('../../assets/carouselItems/freeToMine.png')
  }, {
    title: translations.carousel_items.two.title,
    description: translations.carousel_items.two.description,
    icon: require('../../assets/carouselItems/availableWorldwide.png'),
    size: {
      width: (0, _utils.rem)(86),
      height: (0, _utils.rem)(75)
    }
  }, {
    title: translations.carousel_items.three.title,
    description: translations.carousel_items.three.description,
    icon: require('../../assets/carouselItems/noBatteryDrain.png'),
    size: {
      width: (0, _utils.rem)(83),
      height: (0, _utils.rem)(75)
    }
  }, {
    title: translations.carousel_items.four.title,
    description: translations.carousel_items.four.description,
    icon: require('../../assets/carouselItems/decentralized.png'),
    size: {
      width: (0, _utils.rem)(78),
      height: (0, _utils.rem)(76)
    }
  }, {
    title: translations.carousel_items.five.title,
    description: translations.carousel_items.five.description,
    icon: require('../../assets/carouselItems/communityBased.png'),
    size: {
      width: (0, _utils.rem)(78),
      height: (0, _utils.rem)(75)
    }
  }, {
    title: translations.carousel_items.six.title,
    description: translations.carousel_items.six.description,
    icon: require('../../assets/carouselItems/transparent.png'),
    size: {
      width: (0, _utils.rem)(87.5),
      height: (0, _utils.rem)(75)
    }
  }];
  const carouselRef = (0, _react.useRef)(null);
  const [activeDotIndex, setActiveDotIndex] = (0, _react.useState)(0);
  const renderItem = _ref2 => {
    let {
      item
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: item.title,
      style: styles.itemWrapper
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.item
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      style: item.size,
      source: item.icon
    }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: styles.itemTitle
    }, item.title), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: styles.itemSubtitle
    }, item.description)));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSnapCarousel.default, {
    ref: carouselRef,
    data: carouselData,
    renderItem: renderItem,
    sliderWidth: _utils.screenWidth,
    itemWidth: 242,
    vertical: false,
    onSnapToItem: setActiveDotIndex
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
exports.CarouselOne = CarouselOne;
const styles = _reactNative.StyleSheet.create({
  paginationContainer: {
    paddingTop: (0, _utils.rem)(8),
    paddingBottom: 0
  },
  container: {
    marginTop: (0, _utils.rem)(33)
  },
  item: {
    backgroundColor: _colors.COLORS.white,
    alignItems: 'center',
    paddingHorizontal: (0, _utils.rem)(18),
    paddingTop: (0, _utils.rem)(20),
    paddingBottom: (0, _utils.rem)(40),
    borderRadius: (0, _utils.rem)(16),
    shadowColor: _colors.COLORS.darkGrey,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: (0, _utils.font)(20),
    lineHeight: (0, _utils.rem)(24),
    fontFamily: _fonts.FONTS.lato.heavy,
    color: _colors.COLORS.downriver,
    marginTop: (0, _utils.rem)(28),
    marginBottom: (0, _utils.rem)(31)
  },
  itemSubtitle: {
    textAlign: 'center',
    fontSize: (0, _utils.font)(13),
    lineHeight: (0, _utils.rem)(20),
    fontFamily: _fonts.FONTS.lato.medium,
    color: _colors.COLORS.downriver
  },
  itemWrapper: {
    paddingVertical: (0, _utils.rem)(12),
    paddingHorizontal: (0, _utils.rem)(6)
  },
  dotStyle: {
    backgroundColor: _colors.COLORS.downriver
  },
  inactiveDot: {
    backgroundColor: _colors.COLORS.alto
  }
});
//# sourceMappingURL=CarouselOne.js.map