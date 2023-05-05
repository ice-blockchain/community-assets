import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { font, rem } from '../../utils';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import { landingAppImages } from '../../assets/index';
const hapticFeedback = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };
  ReactNativeHapticFeedback.trigger('soft', options);
};
export const CopyCode = _ref => {
  let {
    translations,
    inviteCode,
    showToast,
    onCopy
  } = _ref;
  const onCopyCode = () => {
    Clipboard.setString(inviteCode);
    hapticFeedback();
    onCopy === null || onCopy === void 0 ? void 0 : onCopy();
    showToast();
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    activeOpacity: 1,
    style: styles.copyContainer,
    onPress: onCopyCode
  }, /*#__PURE__*/React.createElement(TextInput, {
    style: styles.copyText,
    onPressOut: onCopyCode,
    editable: false,
    value: inviteCode
  }), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.copyButton,
    onPress: onCopyCode
  }, /*#__PURE__*/React.createElement(Image, {
    source: landingAppImages.copyIcon,
    style: styles.copy
  }))), /*#__PURE__*/React.createElement(View, {
    style: styles.hintContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.triangleCornerContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.triangleCorner
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.hint
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.hintText
  }, translations.copy))));
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: rem(25)
  },
  copyContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingLeft: rem(16),
    borderRadius: rem(7),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  copyText: {
    flex: 1,
    fontSize: font(14),
    lineHeight: rem(17),
    paddingVertical: rem(10),
    fontFamily: FONTS.lato.heavy,
    color: COLORS.downriver
  },
  copyButton: {
    paddingVertical: rem(10),
    paddingRight: rem(16),
    paddingLeft: rem(10)
  },
  copy: {
    width: rem(12),
    height: rem(15)
  },
  hint: {
    backgroundColor: COLORS.downriver,
    justifyContent: 'center',
    borderRadius: rem(7)
  },
  hintText: {
    fontSize: font(12),
    lineHeight: rem(14),
    fontFamily: FONTS.lato.semibold,
    color: COLORS.white,
    padding: rem(12)
  },
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  triangleCornerContainer: {
    width: rem(13),
    height: rem(11)
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: COLORS.transparent,
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderBottomWidth: 11,
    borderLeftColor: COLORS.transparent,
    borderBottomColor: COLORS.downriver,
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