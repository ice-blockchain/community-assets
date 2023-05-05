import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  LayoutChangeEvent,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { font, rem } from '../../utils';

import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';
import { landingAppImages } from '../../assets/index';
import { CopyCode } from './CopyCode';
import { DownloadOnTheStore } from './DownloadOnTheStore';
import type { Translations } from '../../translations/types';

export const PlusIce = ({
  onLayout,
  closeBtnIsShown,
  translations,
  appLogo,
  inviteCode,
  showToast,
  handleModal,
  onCopy,
}: {
  onLayout: (e: LayoutChangeEvent) => void;
  closeBtnIsShown: boolean;
  translations: Translations;
  appLogo: ImageSourcePropType;
  inviteCode: string;
  showToast: () => void;
  handleModal: (isVisible: boolean) => void;
  onCopy?: () => void;
}) => {
  return (
    <ImageBackground source={landingAppImages.bgTop}>
      {closeBtnIsShown ? (
        <TouchableOpacity
          style={styles.closeLanding}
          onPress={() => handleModal(false)}
        >
          <Image style={styles.closeIcon} source={landingAppImages.closeIcon} />
        </TouchableOpacity>
      ) : null}
      <View style={styles.ellipse}>
        <Image style={styles.rings} source={landingAppImages.rings} />
      </View>
      <View style={styles.images}>
        <Image style={styles.appLogo} source={appLogo} />
        <Image style={styles.plus} source={landingAppImages.plus} />
        <Image style={styles.ice} source={landingAppImages.ice} />
        <Image style={styles.phone} source={landingAppImages.phone} />
      </View>
      <Text style={styles.signUpToday}>{translations.sign_up}</Text>
      <Text style={styles.useOurCode}>{translations.use_code}</Text>
      <View style={styles.receiveConints}>
        <Text style={styles.useOurCode}>{translations.receive_10}</Text>
        <View style={styles.iceIconContainer}>
          <Image style={styles.iceIcon} source={landingAppImages.iceIcon} />
        </View>
        <Text style={styles.useOurCode}>{translations.ice_coins}</Text>
      </View>

      <View style={styles.useInvitationCodeTextContainer}>
        <View style={styles.useInvitationCodeTextContainerLeft}>
          <Image
            source={landingAppImages.fingerIcon}
            style={styles.useInvitationCodeTextContainerFinger1}
          />
        </View>
        <Text style={styles.useInvitationCodeText}>
          {translations.invitation_code}
        </Text>
        <View style={styles.useInvitationCodeTextContainerRight} />
      </View>

      <CopyCode
        showToast={showToast}
        onCopy={onCopy}
        inviteCode={inviteCode}
        translations={translations}
      />

      <DownloadOnTheStore
        onLayout={onLayout}
        containerStyle={styles.downloadOnTheStore}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  images: {
    alignItems: 'center',
    paddingTop: rem(80),
    paddingBottom: rem(40),
  },
  appLogo: {
    maxHeight: rem(42),
    resizeMode: 'contain',
  },
  ice: {
    width: rem(101),
    height: rem(50),
    marginBottom: rem(37),
    resizeMode: 'stretch',
  },
  plus: {
    width: rem(27),
    height: rem(27),
    marginVertical: 27,
  },
  phone: {
    width: rem(224),
    height: rem(458),
  },
  signUpToday: {
    fontSize: font(20),
    lineHeight: rem(24),
    fontFamily: FONTS.lato.heavy,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: rem(8),
  },
  useOurCode: {
    fontSize: font(30),
    lineHeight: rem(36),
    fontFamily: FONTS.lato.heavy,
    color: COLORS.white,
    textAlign: 'center',
  },
  iceIconContainer: {
    paddingLeft: rem(10),
    paddingRight: rem(7),
  },
  iceIcon: {
    width: rem(29),
    height: rem(28),
  },
  receiveConints: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: rem(44),
  },
  useInvitationCodeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  useInvitationCodeText: {
    fontSize: font(17),
    lineHeight: rem(20),
    fontFamily: FONTS.lato.bold,
    color: COLORS.white,
    textAlign: 'center',
    paddingBottom: rem(6),
  },
  useInvitationCodeTextContainerRight: {
    flex: 1,
  },
  useInvitationCodeTextContainerFinger1: {
    position: 'absolute',
    right: 0,
    width: rem(35),
    height: rem(35),
  },
  useInvitationCodeTextContainerLeft: {
    flex: 1,
    height: rem(30),
  },
  downloadOnTheStore: {
    marginTop: rem(54),
    marginBottom: rem(17),
  },
  ellipse: {
    position: 'absolute',
  },
  closeLanding: {
    position: 'absolute',
    right: rem(19),
    top: rem(59),
    zIndex: 100,
  },
  rings: {
    width: rem(390),
    height: rem(520),
  },
  closeIcon: {
    width: rem(24),
    height: rem(24),
  },
});
