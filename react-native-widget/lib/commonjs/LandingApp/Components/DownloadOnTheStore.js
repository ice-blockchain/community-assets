"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadOnTheStore = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _utils = require("../../utils");
var _links = require("../../constants/links");
var _index = require("../../assets/index");
var _colors = require("../../styles/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DownloadOnTheStore = _ref => {
  let {
    containerStyle,
    onLayout
  } = _ref;
  const onPress = () => {
    _reactNative.Linking.canOpenURL(_links.LINKS.ICE_LINK).then(supported => {
      supported && _reactNative.Linking.openURL(_links.LINKS.ICE_LINK);
    });
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, containerStyle],
    onLayout: onLayout
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.storeButton
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.storeIcon,
    source: _utils.isIOS ? _index.landingAppImages.appstoreIcon : _index.landingAppImages.playmarketIcon
  }))));
};
exports.DownloadOnTheStore = DownloadOnTheStore;
const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  storeButton: {
    borderRadius: (0, _utils.rem)(9),
    backgroundColor: _colors.COLORS.downriver,
    width: (0, _utils.rem)(152),
    height: (0, _utils.rem)(50)
  },
  storeIcon: {
    width: (0, _utils.rem)(152),
    height: (0, _utils.rem)(50)
  }
});
//# sourceMappingURL=DownloadOnTheStore.js.map