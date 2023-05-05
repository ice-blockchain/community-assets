import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  Linking,
  LayoutChangeEvent,
  Image,
} from 'react-native';
import { isIOS, rem } from '../../utils';

import { LINKS } from '../../constants/links';
import { landingAppImages } from '../../assets/index';
import { COLORS } from '../../styles/colors';

export const DownloadOnTheStore = ({
  containerStyle,
  onLayout,
}: {
  containerStyle?: StyleProp<ViewStyle>;
  onLayout?: (e: LayoutChangeEvent) => void;
}) => {
  const onPress = () => {
    Linking.canOpenURL(LINKS.ICE_LINK).then((supported) => {
      supported && Linking.openURL(LINKS.ICE_LINK);
    });
  };
  return (
    <View style={[styles.container, containerStyle]} onLayout={onLayout}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.storeButton}>
          <Image
            style={styles.storeIcon}
            source={
              isIOS
                ? landingAppImages.appstoreIcon
                : landingAppImages.playmarketIcon
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  storeButton: {
    borderRadius: rem(9),
    backgroundColor: COLORS.downriver,
    width: rem(152),
    height: rem(50),
  },
  storeIcon: {
    width: rem(152),
    height: rem(50),
  },
});
