import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FONTS } from '../../styles/fonts';
import { CarouselOne } from './CarouselOne';
import { COLORS } from '../../styles/colors';
import { CarouselTwo } from './CarouselTwo';
import { DownloadOnTheStore } from './DownloadOnTheStore';
import { CopyCode } from './CopyCode';
import { landingAppImages } from '../../assets/index';
import { font, rem, screenWidth } from '../../utils';
export const Announce = _ref => {
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
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, isQuoteShown ? /*#__PURE__*/React.createElement(View, {
    style: styles.quotesContainer
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.quotes,
    source: landingAppImages.quotes
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.quotesText
  }, quote)) : null, isQuoteShown ? /*#__PURE__*/React.createElement(Text, {
    style: styles.coFounder
  }, quoteAuthor) : null, /*#__PURE__*/React.createElement(Text, {
    style: styles.joinIceToday
  }, translations.join_ice), /*#__PURE__*/React.createElement(Text, {
    style: styles.globalCurrencyReset
  }, translations.global_currency), /*#__PURE__*/React.createElement(CarouselOne, {
    translations: translations
  }), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: styles.carouselTwoTop
  }), /*#__PURE__*/React.createElement(ImageBackground, {
    source: landingAppImages.bg
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.carouselTwoBottom
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.triangle
  }), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: styles.ellipse
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.rings,
    source: landingAppImages.rings
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.downloadTheApp
  }, translations.get_reward), /*#__PURE__*/React.createElement(Text, {
    style: styles.signUpWithOurCode
  }, translations.sign_up_with), /*#__PURE__*/React.createElement(View, {
    style: styles.receiveIceCoinsCintainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.signUpWithOurCode
  }, translations.code_and_receive), /*#__PURE__*/React.createElement(View, {
    style: styles.iceIconContainer
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.iceIcon,
    source: landingAppImages.iceIcon
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.signUpWithOurCode
  }, translations.ice_coins)), /*#__PURE__*/React.createElement(CopyCode, {
    showToast: showToast,
    onCopy: onCopy,
    inviteCode: inviteCode,
    translations: translations
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.useThisInvitation
  }, translations.create_account), /*#__PURE__*/React.createElement(DownloadOnTheStore, null), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.goBackToApp,
    onPress: () => handleModal(false)
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.goBackIcon,
    source: landingAppImages.goBackIcon
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.goBackToAppText
  }, translations.go_back)))), /*#__PURE__*/React.createElement(View, {
    style: styles.carouselTwo
  }, /*#__PURE__*/React.createElement(CarouselTwo, null))));
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white
  },
  quotesContainer: {
    flexDirection: 'row',
    paddingHorizontal: rem(38),
    marginTop: rem(50)
  },
  quotesText: {
    flex: 1,
    textAlign: 'center',
    paddingTop: rem(18),
    fontSize: font(14),
    lineHeight: rem(20),
    fontFamily: FONTS.lato.bold,
    color: COLORS.downriver,
    paddingHorizontal: rem(7)
  },
  coFounder: {
    textAlign: 'center',
    fontSize: font(12),
    lineHeight: rem(20),
    fontFamily: FONTS.lato.bold,
    color: COLORS.tundora,
    marginTop: rem(12)
  },
  joinIceToday: {
    textAlign: 'center',
    fontSize: font(16),
    lineHeight: rem(19),
    fontFamily: FONTS.lato.bold,
    color: COLORS.downriver,
    marginTop: rem(50)
  },
  globalCurrencyReset: {
    textAlign: 'center',
    fontSize: font(36),
    lineHeight: rem(37),
    fontFamily: FONTS.lato.bold,
    color: COLORS.downriver,
    marginTop: rem(10)
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: COLORS.transparent,
    borderStyle: 'solid',
    borderRightWidth: screenWidth,
    borderTopWidth: 130,
    borderRightColor: COLORS.transparent,
    borderTopColor: COLORS.white,
    position: 'absolute',
    right: 0
  },
  carouselTwo: {
    position: 'absolute',
    top: 0
  },
  carouselTwoTop: {
    height: rem(230),
    backgroundColor: COLORS.white
  },
  carouselTwoBottom: {
    height: rem(280)
  },
  downloadTheApp: {
    fontSize: font(32),
    lineHeight: rem(37),
    fontFamily: FONTS.lato.bold,
    color: COLORS.white,
    marginTop: rem(80),
    textAlign: 'center',
    paddingHorizontal: rem(24),
    marginBottom: rem(55)
  },
  useThisInvitation: {
    fontSize: font(10),
    lineHeight: rem(12),
    fontFamily: FONTS.lato.bold,
    color: COLORS.white,
    marginTop: rem(10),
    textAlign: 'center',
    paddingHorizontal: rem(24),
    marginBottom: rem(27)
  },
  signUpWithOurCode: {
    fontSize: font(16),
    lineHeight: rem(19),
    fontFamily: FONTS.lato.bold,
    color: COLORS.white,
    textAlign: 'center'
  },
  receiveIceCoinsCintainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rem(14)
  },
  iceIconContainer: {
    paddingHorizontal: rem(4)
  },
  iceIcon: {
    width: rem(18),
    height: rem(17)
  },
  goBackIcon: {
    width: rem(12),
    height: rem(12)
  },
  goBackToApp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: rem(66)
  },
  goBackToAppText: {
    fontSize: font(14),
    lineHeight: rem(17),
    fontFamily: FONTS.lato.bold,
    color: COLORS.white,
    marginLeft: rem(10)
  },
  ellipse: {
    position: 'absolute'
  },
  rings: {
    width: rem(390),
    height: rem(520)
  },
  quotes: {
    width: rem(34),
    height: rem(27)
  }
});
//# sourceMappingURL=Announce.js.map