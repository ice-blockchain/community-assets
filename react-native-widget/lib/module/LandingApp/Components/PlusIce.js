import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { font, rem } from '../../utils';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import { landingAppImages } from '../../assets/index';
import { CopyCode } from './CopyCode';
import { DownloadOnTheStore } from './DownloadOnTheStore';
export const PlusIce = _ref => {
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
  return /*#__PURE__*/React.createElement(ImageBackground, {
    source: landingAppImages.bgTop
  }, closeBtnIsShown ? /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.closeLanding,
    onPress: () => handleModal(false)
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.closeIcon,
    source: landingAppImages.closeIcon
  })) : null, /*#__PURE__*/React.createElement(View, {
    style: styles.ellipse
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.rings,
    source: landingAppImages.rings
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.images
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.appLogo,
    source: appLogo
  }), /*#__PURE__*/React.createElement(Image, {
    style: styles.plus,
    source: landingAppImages.plus
  }), /*#__PURE__*/React.createElement(Image, {
    style: styles.ice,
    source: landingAppImages.ice
  }), /*#__PURE__*/React.createElement(Image, {
    style: styles.phone,
    source: landingAppImages.phone
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.signUpToday
  }, translations.sign_up), /*#__PURE__*/React.createElement(Text, {
    style: styles.useOurCode
  }, translations.use_code), /*#__PURE__*/React.createElement(View, {
    style: styles.receiveConints
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.useOurCode
  }, translations.receive_10), /*#__PURE__*/React.createElement(View, {
    style: styles.iceIconContainer
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.iceIcon,
    source: landingAppImages.iceIcon
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.useOurCode
  }, translations.ice_coins)), /*#__PURE__*/React.createElement(View, {
    style: styles.useInvitationCodeTextContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.useInvitationCodeTextContainerLeft
  }, /*#__PURE__*/React.createElement(Image, {
    source: landingAppImages.fingerIcon,
    style: styles.useInvitationCodeTextContainerFinger1
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.useInvitationCodeText
  }, translations.invitation_code), /*#__PURE__*/React.createElement(View, {
    style: styles.useInvitationCodeTextContainerRight
  })), /*#__PURE__*/React.createElement(CopyCode, {
    showToast: showToast,
    onCopy: onCopy,
    inviteCode: inviteCode,
    translations: translations
  }), /*#__PURE__*/React.createElement(DownloadOnTheStore, {
    onLayout: onLayout,
    containerStyle: styles.downloadOnTheStore
  }));
};
const styles = StyleSheet.create({
  images: {
    alignItems: 'center',
    paddingTop: rem(80),
    paddingBottom: rem(40)
  },
  appLogo: {
    maxHeight: rem(42),
    resizeMode: 'contain'
  },
  ice: {
    width: rem(101),
    height: rem(50),
    marginBottom: rem(37),
    resizeMode: 'stretch'
  },
  plus: {
    width: rem(27),
    height: rem(27),
    marginVertical: 27
  },
  phone: {
    width: rem(224),
    height: rem(458)
  },
  signUpToday: {
    fontSize: font(20),
    lineHeight: rem(24),
    fontFamily: FONTS.lato.heavy,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: rem(8)
  },
  useOurCode: {
    fontSize: font(30),
    lineHeight: rem(36),
    fontFamily: FONTS.lato.heavy,
    color: COLORS.white,
    textAlign: 'center'
  },
  iceIconContainer: {
    paddingLeft: rem(10),
    paddingRight: rem(7)
  },
  iceIcon: {
    width: rem(29),
    height: rem(28)
  },
  receiveConints: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: rem(44)
  },
  useInvitationCodeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  useInvitationCodeText: {
    fontSize: font(17),
    lineHeight: rem(20),
    fontFamily: FONTS.lato.bold,
    color: COLORS.white,
    textAlign: 'center',
    paddingBottom: rem(6)
  },
  useInvitationCodeTextContainerRight: {
    flex: 1
  },
  useInvitationCodeTextContainerFinger1: {
    position: 'absolute',
    right: 0,
    width: rem(35),
    height: rem(35)
  },
  useInvitationCodeTextContainerLeft: {
    flex: 1,
    height: rem(30)
  },
  downloadOnTheStore: {
    marginTop: rem(54),
    marginBottom: rem(17)
  },
  ellipse: {
    position: 'absolute'
  },
  closeLanding: {
    position: 'absolute',
    right: rem(19),
    top: rem(59),
    zIndex: 100
  },
  rings: {
    width: rem(390),
    height: rem(520)
  },
  closeIcon: {
    width: rem(24),
    height: rem(24)
  }
});
//# sourceMappingURL=PlusIce.js.map