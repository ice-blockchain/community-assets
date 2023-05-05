import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Linking, Image } from 'react-native';
import { isIOS, rem } from '../../utils';
import { LINKS } from '../../constants/links';
import { landingAppImages } from '../../assets/index';
import { COLORS } from '../../styles/colors';
export const DownloadOnTheStore = _ref => {
  let {
    containerStyle,
    onLayout
  } = _ref;
  const onPress = () => {
    Linking.canOpenURL(LINKS.ICE_LINK).then(supported => {
      supported && Linking.openURL(LINKS.ICE_LINK);
    });
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, containerStyle],
    onLayout: onLayout
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.storeButton
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.storeIcon,
    source: isIOS ? landingAppImages.appstoreIcon : landingAppImages.playmarketIcon
  }))));
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  storeButton: {
    borderRadius: rem(9),
    backgroundColor: COLORS.downriver,
    width: rem(152),
    height: rem(50)
  },
  storeIcon: {
    width: rem(152),
    height: rem(50)
  }
});
//# sourceMappingURL=DownloadOnTheStore.js.map