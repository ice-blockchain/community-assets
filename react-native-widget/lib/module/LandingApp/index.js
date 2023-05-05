import React, { useCallback, useState } from 'react';
import { Animated, StatusBar } from 'react-native';
import { PlusIce } from './Components/PlusIce';
import { Announce } from './Components/Announce';
import { useBackHandler } from '../hooks/useBackHandler';
export const LandingApp = _ref => {
  let {
    translations,
    appLogo,
    inviteCode,
    showToast,
    handleModal,
    onCopy,
    quote,
    quoteAuthor,
    isQuoteShown
  } = _ref;
  const [mainSection, setMainSectionHeight] = useState(1000);
  const [closeBtnIsShown, setShow] = useState(false);
  const scrollHandler = useCallback(event => {
    if (event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y > mainSection && !closeBtnIsShown) {
      setShow(true);
    }
  }, [closeBtnIsShown, mainSection]);
  const onLayout = useCallback(event => {
    setMainSectionHeight(event.nativeEvent.layout.y);
  }, []);
  useBackHandler(() => {
    return false;
  });
  return /*#__PURE__*/React.createElement(Animated.ScrollView, {
    onScroll: scrollHandler,
    bounces: false,
    scrollEventThrottle: 16
  }, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "light-content"
  }), /*#__PURE__*/React.createElement(PlusIce, {
    translations: translations,
    closeBtnIsShown: closeBtnIsShown,
    onLayout: onLayout,
    appLogo: appLogo,
    inviteCode: inviteCode,
    showToast: showToast,
    handleModal: handleModal,
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement(Announce, {
    inviteCode: inviteCode,
    translations: translations,
    showToast: showToast,
    handleModal: handleModal,
    onCopy: onCopy,
    quote: quote,
    quoteAuthor: quoteAuthor,
    isQuoteShown: isQuoteShown
  }));
};
//# sourceMappingURL=index.js.map