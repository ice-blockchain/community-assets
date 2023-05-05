"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IceModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("./LandingApp/index");
var _reactNative = require("react-native");
var _en = require("./translations/en");
var _index2 = require("./utils/index");
var _assets = require("./assets");
var _fonts = require("./styles/fonts");
var _colors = require("./styles/colors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const IceModal = _ref => {
  let {
    translations = _en.en,
    visible,
    appLogo = _assets.landingAppImages.appLogo,
    inviteCode = 'invite-code',
    onCopy,
    quote = translations.quote,
    quoteAuthor = translations.quote_author,
    isQuoteShown = true
  } = _ref;
  const popAnim = (0, _react.useRef)(new _reactNative.Animated.Value(-_index2.screenHeight * -1)).current;
  const [isVisible, handleModal] = (0, _react.useState)(visible);
  const showToast = () => {
    _reactNative.Animated.timing(popAnim, {
      toValue: -_index2.screenHeight * 0.9 * -1,
      duration: 100,
      useNativeDriver: true
    }).start(() => hideToast());
  };
  const hideToast = () => {
    setTimeout(() => {
      _reactNative.Animated.timing(popAnim, {
        toValue: -_index2.screenHeight * -1,
        duration: 100,
        useNativeDriver: true
      }).start();
    }, 2000);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    visible: isVisible,
    presentationStyle: "overFullScreen",
    animationType: "slide",
    style: styles.modal
  }, /*#__PURE__*/_react.default.createElement(_index.LandingApp, {
    translations: translations,
    appLogo: appLogo,
    inviteCode: inviteCode,
    handleModal: handleModal,
    showToast: showToast,
    onCopy: onCopy,
    quote: quote,
    quoteAuthor: quoteAuthor,
    isQuoteShown: isQuoteShown
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.toastContainer, {
      transform: [{
        translateY: popAnim
      }]
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.landingAppImages.checkmark,
    style: styles.checkmark
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.text
  }, translations.copied)));
};
exports.IceModal = IceModal;
const styles = _reactNative.StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    flex: 1
  },
  toastContainer: {
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: _colors.COLORS.downriver,
    flexDirection: 'row',
    borderRadius: 20
  },
  text: {
    color: _colors.COLORS.white,
    fontFamily: _fonts.FONTS.lato.medium,
    fontSize: 15,
    lineHeight: 20,
    paddingLeft: 4
  },
  checkmark: {
    tintColor: _colors.COLORS.white,
    width: 20,
    height: 20
  }
});
//# sourceMappingURL=index.js.map