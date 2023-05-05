"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlusIce = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _utils = require("../../utils");
var _colors = require("../../styles/colors");
var _fonts = require("../../styles/fonts");
var _index = require("../../assets/index");
var _CopyCode = require("./CopyCode");
var _DownloadOnTheStore = require("./DownloadOnTheStore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PlusIce = _ref => {
  let {
    onLayout,
    closeBtnIsShown,
    translations,
    appLogo,
    inviteCode,
    showToast,
    handleModal,
    onCopy
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: _index.landingAppImages.bgTop
  }, closeBtnIsShown ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.closeLanding,
    onPress: () => handleModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.closeIcon,
    source: _index.landingAppImages.closeIcon
  })) : null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.ellipse
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.rings,
    source: _index.landingAppImages.rings
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.images
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.appLogo,
    source: appLogo
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.plus,
    source: _index.landingAppImages.plus
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.ice,
    source: _index.landingAppImages.ice
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.phone,
    source: _index.landingAppImages.phone
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.signUpToday
  }, translations.sign_up), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.useOurCode
  }, translations.use_code), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.receiveConints
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.useOurCode
  }, translations.receive_10), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.iceIconContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.iceIcon,
    source: _index.landingAppImages.iceIcon
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.useOurCode
  }, translations.ice_coins)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.useInvitationCodeTextContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.useInvitationCodeTextContainerLeft
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _index.landingAppImages.fingerIcon,
    style: styles.useInvitationCodeTextContainerFinger1
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.useInvitationCodeText
  }, translations.invitation_code), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.useInvitationCodeTextContainerRight
  })), /*#__PURE__*/_react.default.createElement(_CopyCode.CopyCode, {
    showToast: showToast,
    onCopy: onCopy,
    inviteCode: inviteCode,
    translations: translations
  }), /*#__PURE__*/_react.default.createElement(_DownloadOnTheStore.DownloadOnTheStore, {
    onLayout: onLayout,
    containerStyle: styles.downloadOnTheStore
  }));
};
exports.PlusIce = PlusIce;
const styles = _reactNative.StyleSheet.create({
  images: {
    alignItems: 'center',
    paddingTop: (0, _utils.rem)(80),
    paddingBottom: (0, _utils.rem)(40)
  },
  appLogo: {
    maxHeight: (0, _utils.rem)(42),
    resizeMode: 'contain'
  },
  ice: {
    width: (0, _utils.rem)(101),
    height: (0, _utils.rem)(50),
    marginBottom: (0, _utils.rem)(37),
    resizeMode: 'stretch'
  },
  plus: {
    width: (0, _utils.rem)(27),
    height: (0, _utils.rem)(27),
    marginVertical: 27
  },
  phone: {
    width: (0, _utils.rem)(224),
    height: (0, _utils.rem)(458)
  },
  signUpToday: {
    fontSize: (0, _utils.font)(20),
    lineHeight: (0, _utils.rem)(24),
    fontFamily: _fonts.FONTS.lato.heavy,
    color: _colors.COLORS.white,
    textAlign: 'center',
    marginBottom: (0, _utils.rem)(8)
  },
  useOurCode: {
    fontSize: (0, _utils.font)(30),
    lineHeight: (0, _utils.rem)(36),
    fontFamily: _fonts.FONTS.lato.heavy,
    color: _colors.COLORS.white,
    textAlign: 'center'
  },
  iceIconContainer: {
    paddingLeft: (0, _utils.rem)(10),
    paddingRight: (0, _utils.rem)(7)
  },
  iceIcon: {
    width: (0, _utils.rem)(29),
    height: (0, _utils.rem)(28)
  },
  receiveConints: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: (0, _utils.rem)(44)
  },
  useInvitationCodeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  useInvitationCodeText: {
    fontSize: (0, _utils.font)(17),
    lineHeight: (0, _utils.rem)(20),
    fontFamily: _fonts.FONTS.lato.bold,
    color: _colors.COLORS.white,
    textAlign: 'center',
    paddingBottom: (0, _utils.rem)(6)
  },
  useInvitationCodeTextContainerRight: {
    flex: 1
  },
  useInvitationCodeTextContainerFinger1: {
    position: 'absolute',
    right: 0,
    width: (0, _utils.rem)(35),
    height: (0, _utils.rem)(35)
  },
  useInvitationCodeTextContainerLeft: {
    flex: 1,
    height: (0, _utils.rem)(30)
  },
  downloadOnTheStore: {
    marginTop: (0, _utils.rem)(54),
    marginBottom: (0, _utils.rem)(17)
  },
  ellipse: {
    position: 'absolute'
  },
  closeLanding: {
    position: 'absolute',
    right: (0, _utils.rem)(19),
    top: (0, _utils.rem)(59),
    zIndex: 100
  },
  rings: {
    width: (0, _utils.rem)(390),
    height: (0, _utils.rem)(520)
  },
  closeIcon: {
    width: (0, _utils.rem)(24),
    height: (0, _utils.rem)(24)
  }
});
//# sourceMappingURL=PlusIce.js.map