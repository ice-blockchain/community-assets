import React, { useRef, useState } from 'react';
import { LandingApp } from './LandingApp/index';
import {
  Image,
  ImageSourcePropType,
  Modal,
  StyleSheet,
  Text,
  Animated,
} from 'react-native';
import { en } from './translations/en';
import { screenHeight } from './utils/index';
import { landingAppImages } from './assets';
import type { Translations } from './translations/types';
import { FONTS } from './styles/fonts';
import { COLORS } from './styles/colors';

type Props = {
  translations?: Translations;
  visible: boolean;
  appLogo?: ImageSourcePropType;
  inviteCode: string;
  onCopy?: () => void;
  quote?: string;
  quoteAuthor?: string;
  isQuoteShown?: boolean;
};

export const IceModal = ({
  translations = en,
  visible,
  appLogo = landingAppImages.appLogo,
  inviteCode = 'invite-code',
  onCopy,
  quote = translations.quote,
  quoteAuthor = translations.quote_author,
  isQuoteShown = true,
}: Props): JSX.Element => {
  const popAnim = useRef(new Animated.Value(-screenHeight * -1)).current;

  const [isVisible, handleModal] = useState(visible);

  const showToast = () => {
    Animated.timing(popAnim, {
      toValue: -screenHeight * 0.9 * -1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => hideToast());
  };

  const hideToast = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: -screenHeight * -1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };
  return (
    <Modal
      visible={isVisible}
      presentationStyle="overFullScreen"
      animationType="slide"
      style={styles.modal}
    >
      <LandingApp
        translations={translations}
        appLogo={appLogo}
        inviteCode={inviteCode}
        handleModal={handleModal}
        showToast={showToast}
        onCopy={onCopy}
        quote={quote}
        quoteAuthor={quoteAuthor}
        isQuoteShown={isQuoteShown}
      />
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{ translateY: popAnim }],
          },
        ]}
      >
        <Image source={landingAppImages.checkmark} style={styles.checkmark} />
        <Text style={styles.text}>{translations.copied}</Text>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { padding: 0, margin: 0, flex: 1 },
  toastContainer: {
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: COLORS.downriver,
    flexDirection: 'row',
    borderRadius: 20,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.lato.medium,
    fontSize: 15,
    lineHeight: 20,
    paddingLeft: 4,
  },
  checkmark: {
    tintColor: COLORS.white,
    width: 20,
    height: 20,
  },
});
