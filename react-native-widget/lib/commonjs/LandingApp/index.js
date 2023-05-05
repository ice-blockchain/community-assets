"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingApp = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _PlusIce = require("./Components/PlusIce");
var _Announce = require("./Components/Announce");
var _useBackHandler = require("../hooks/useBackHandler");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const LandingApp = _ref => {
  let {
    translations,
    appLogo,
    inviteCode,
    showToast,
    handleModal,
    onCopy,
    quote,
    quoteAuthor,
    isQuoteShown
  } = _ref;
  const [mainSection, setMainSectionHeight] = (0, _react.useState)(1000);
  const [closeBtnIsShown, setShow] = (0, _react.useState)(false);
  const scrollHandler = (0, _react.useCallback)(event => {
    if (event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y > mainSection && !closeBtnIsShown) {
      setShow(true);
    }
  }, [closeBtnIsShown, mainSection]);
  const onLayout = (0, _react.useCallback)(event => {
    setMainSectionHeight(event.nativeEvent.layout.y);
  }, []);
  (0, _useBackHandler.useBackHandler)(() => {
    return false;
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.ScrollView, {
    onScroll: scrollHandler,
    bounces: false,
    scrollEventThrottle: 16
  }, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "light-content"
  }), /*#__PURE__*/_react.default.createElement(_PlusIce.PlusIce, {
    translations: translations,
    closeBtnIsShown: closeBtnIsShown,
    onLayout: onLayout,
    appLogo: appLogo,
    inviteCode: inviteCode,
    showToast: showToast,
    handleModal: handleModal,
    onCopy: onCopy
  }), /*#__PURE__*/_react.default.createElement(_Announce.Announce, {
    inviteCode: inviteCode,
    translations: translations,
    showToast: showToast,
    handleModal: handleModal,
    onCopy: onCopy,
    quote: quote,
    quoteAuthor: quoteAuthor,
    isQuoteShown: isQuoteShown
  }));
};
exports.LandingApp = LandingApp;
//# sourceMappingURL=index.js.map