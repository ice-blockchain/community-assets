"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyCode = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeHapticFeedback = _interopRequireDefault(require("react-native-haptic-feedback"));
var _utils = require("../../utils");
var _colors = require("../../styles/colors");
var _fonts = require("../../styles/fonts");
var _index = require("../../assets/index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hapticFeedback = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };
  _reactNativeHapticFeedback.default.trigger('soft', options);
};
const CopyCode = _ref => {
  let {
    translations,
    inviteCode,
    showToast,
    onCopy
  } = _ref;
  const onCopyCode = () => {
    _clipboard.default.setString(inviteCode);
    hapticFeedback();
    onCopy === null || onCopy === void 0 ? void 0 : onCopy();
    showToast();
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 1,
    style: styles.copyContainer,
    onPress: onCopyCode
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.copyText,
    onPressOut: onCopyCode,
    editable: false,
    value: inviteCode
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.copyButton,
    onPress: onCopyCode
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _index.landingAppImages.copyIcon,
    style: styles.copy
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.hintContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.triangleCornerContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.triangleCorner
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.hint
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.hintText
  }, translations.copy))));
};
exports.CopyCode = CopyCode;
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: (0, _utils.rem)(25)
  },
  copyContainer: {
    flexDirection: 'row',
    backgroundColor: _colors.COLORS.white,
    paddingLeft: (0, _utils.rem)(16),
    borderRadius: (0, _utils.rem)(7),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  copyText: {
    flex: 1,
    fontSize: (0, _utils.font)(14),
    lineHeight: (0, _utils.rem)(17),
    paddingVertical: (0, _utils.rem)(10),
    fontFamily: _fonts.FONTS.lato.heavy,
    color: _colors.COLORS.downriver
  },
  copyButton: {
    paddingVertical: (0, _utils.rem)(10),
    paddingRight: (0, _utils.rem)(16),
    paddingLeft: (0, _utils.rem)(10)
  },
  copy: {
    width: (0, _utils.rem)(12),
    height: (0, _utils.rem)(15)
  },
  hint: {
    backgroundColor: _colors.COLORS.downriver,
    justifyContent: 'center',
    borderRadius: (0, _utils.rem)(7)
  },
  hintText: {
    fontSize: (0, _utils.font)(12),
    lineHeight: (0, _utils.rem)(14),
    fontFamily: _fonts.FONTS.lato.semibold,
    color: _colors.COLORS.white,
    padding: (0, _utils.rem)(12)
  },
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  triangleCornerContainer: {
    width: (0, _utils.rem)(13),
    height: (0, _utils.rem)(11)
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: _colors.COLORS.transparent,
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderBottomWidth: 11,
    borderLeftColor: _colors.COLORS.transparent,
    borderBottomColor: _colors.COLORS.downriver,
    position: 'absolute',
    right: 0
  },
  toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  toastRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  toastText: {
    width: '70%',
    padding: 2
  }
});
//# sourceMappingURL=CopyCode.js.map