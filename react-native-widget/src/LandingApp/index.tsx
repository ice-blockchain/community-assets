import React, { useCallback, useState } from 'react';
import {
  Animated,
  ImageSourcePropType,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
} from 'react-native';

import { PlusIce } from './Components/PlusIce';
import { Announce } from './Components/Announce';
import { useBackHandler } from '../hooks/useBackHandler';
import type { Translations } from '../translations/types';

type Props = {
  translations: Translations;
  appLogo: ImageSourcePropType;
  inviteCode: string;
  handleModal: (isVisible: boolean) => void;
  showToast: () => void;
  onCopy?: () => void;
  quote: string;
  quoteAuthor: string;
  isQuoteShown: boolean;
};

export const LandingApp = ({
  translations,
  appLogo,
  inviteCode,
  showToast,
  handleModal,
  onCopy,
  quote,
  quoteAuthor,
  isQuoteShown,
}: Props) => {
  const [mainSection, setMainSectionHeight] = useState(1000);
  const [closeBtnIsShown, setShow] = useState(false);

  const scrollHandler = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (
        event.nativeEvent.layoutMeasurement.height +
          event.nativeEvent.contentOffset.y >
          mainSection &&
        !closeBtnIsShown
      ) {
        setShow(true);
      }
    },
    [closeBtnIsShown, mainSection]
  );

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setMainSectionHeight(event.nativeEvent.layout.y);
  }, []);

  useBackHandler(() => {
    return false;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      bounces={false}
      scrollEventThrottle={16}
    >
      <StatusBar barStyle="light-content" />
      <PlusIce
        translations={translations}
        closeBtnIsShown={closeBtnIsShown}
        onLayout={onLayout}
        appLogo={appLogo}
        inviteCode={inviteCode}
        showToast={showToast}
        handleModal={handleModal}
        onCopy={onCopy}
      />
      <Announce
        inviteCode={inviteCode}
        translations={translations}
        showToast={showToast}
        handleModal={handleModal}
        onCopy={onCopy}
        quote={quote}
        quoteAuthor={quoteAuthor}
        isQuoteShown={isQuoteShown}
      />
    </Animated.ScrollView>
  );
};
