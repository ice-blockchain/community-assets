"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Announce = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _fonts = require("../../styles/fonts");
var _CarouselOne = require("./CarouselOne");
var _colors = require("../../styles/colors");
var _CarouselTwo = require("./CarouselTwo");
var _DownloadOnTheStore = require("./DownloadOnTheStore");
var _CopyCode = require("./CopyCode");
var _index = require("../../assets/index");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Announce = _ref => {
  let {
    showToast,
    translations,
    handleModal,
    inviteCode,
    onCopy,
    quote,
    quoteAuthor,
    isQuoteShown
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, isQuoteShown ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.quotesContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.quotes,
    source: _index.landingAppImages.quotes
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.quotesText
  }, quote)) : null, isQuoteShown ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.coFounder
  }, quoteAuthor) : null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.joinIceToday
  }, translations.join_ice), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.globalCurrencyReset
  }, translations.global_currency), /*#__PURE__*/_react.default.createElement(_CarouselOne.CarouselOne, {
    translations: translations
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.carouselTwoTop
  }), /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: _index.landingAppImages.bg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.carouselTwoBottom
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.triangle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.ellipse
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.rings,
    source: _index.landingAppImages.rings
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.downloadTheApp
  }, translations.get_reward), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.signUpWithOurCode
  }, translations.sign_up_with), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.receiveIceCoinsCintainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.signUpWithOurCode
  }, translations.code_and_receive), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.iceIconContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.iceIcon,
    source: _index.landingAppImages.iceIcon
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.signUpWithOurCode
  }, translations.ice_coins)), /*#__PURE__*/_react.default.createElement(_CopyCode.CopyCode, {
    showToast: showToast,
    onCopy: onCopy,
    inviteCode: inviteCode,
    translations: translations
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.useThisInvitation
  }, translations.create_account), /*#__PURE__*/_react.default.createElement(_DownloadOnTheStore.DownloadOnTheStore, null), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.goBackToApp,
    onPress: () => handleModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.goBackIcon,
    source: _index.landingAppImages.goBackIcon
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.goBackToAppText
  }, translations.go_back)))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.carouselTwo
  }, /*#__PURE__*/_react.default.createElement(_CarouselTwo.CarouselTwo, null))));
};
exports.Announce = Announce;
const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _colors.COLORS.white
  },
  quotesContainer: {
    flexDirection: 'row',
    paddingHorizontal: (0, _utils.rem)(38),
    marginTop: (0, _utils.rem)(50)
  },
  quotesText: {
    flex: 1,
    textAlign: 'center',
    paddingTop: (0, _utils.rem)(18),
    fontSize: (0, _utils.font)(14),
    lineHeight: (0, _utils.rem)(20),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.downriver,
    paddingHorizontal: (0, _utils.rem)(7)
  },
  coFounder: {
    textAlign: 'center',
    fontSize: (0, _utils.font)(12),
    lineHeight: (0, _utils.rem)(20),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.tundora,
    marginTop: (0, _utils.rem)(12)
  },
  joinIceToday: {
    textAlign: 'center',
    fontSize: (0, _utils.font)(16),
    lineHeight: (0, _utils.rem)(19),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.downriver,
    marginTop: (0, _utils.rem)(50)
  },
  globalCurrencyReset: {
    textAlign: 'center',
    fontSize: (0, _utils.font)(36),
    lineHeight: (0, _utils.rem)(37),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.downriver,
    marginTop: (0, _utils.rem)(10)
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: _colors.COLORS.transparent,
    borderStyle: 'solid',
    borderRightWidth: _utils.screenWidth,
    borderTopWidth: 130,
    borderRightColor: _colors.COLORS.transparent,
    borderTopColor: _colors.COLORS.white,
    position: 'absolute',
    right: 0
  },
  carouselTwo: {
    position: 'absolute',
    top: 0
  },
  carouselTwoTop: {
    height: (0, _utils.rem)(230),
    backgroundColor: _colors.COLORS.white
  },
  carouselTwoBottom: {
    height: (0, _utils.rem)(280)
  },
  downloadTheApp: {
    fontSize: (0, _utils.font)(32),
    lineHeight: (0, _utils.rem)(37),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.white,
    marginTop: (0, _utils.rem)(80),
    textAlign: 'center',
    paddingHorizontal: (0, _utils.rem)(24),
    marginBottom: (0, _utils.rem)(55)
  },
  useThisInvitation: {
    fontSize: (0, _utils.font)(10),
    lineHeight: (0, _utils.rem)(12),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.white,
    marginTop: (0, _utils.rem)(10),
    textAlign: 'center',
    paddingHorizontal: (0, _utils.rem)(24),
    marginBottom: (0, _utils.rem)(27)
  },
  signUpWithOurCode: {
    fontSize: (0, _utils.font)(16),
    lineHeight: (0, _utils.rem)(19),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.white,
    textAlign: 'center'
  },
  receiveIceCoinsCintainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: (0, _utils.rem)(14)
  },
  iceIconContainer: {
    paddingHorizontal: (0, _utils.rem)(4)
  },
  iceIcon: {
    width: (0, _utils.rem)(18),
    height: (0, _utils.rem)(17)
  },
  goBackIcon: {
    width: (0, _utils.rem)(12),
    height: (0, _utils.rem)(12)
  },
  goBackToApp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: (0, _utils.rem)(66)
  },
  goBackToAppText: {
    fontSize: (0, _utils.font)(14),
    lineHeight: (0, _utils.rem)(17),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.white,
    marginLeft: (0, _utils.rem)(10)
  },
  ellipse: {
    position: 'absolute'
  },
  rings: {
    width: (0, _utils.rem)(390),
    height: (0, _utils.rem)(520)
  },
  quotes: {
    width: (0, _utils.rem)(34),
    height: (0, _utils.rem)(27)
  }
});
//# sourceMappingURL=Announce.js.map