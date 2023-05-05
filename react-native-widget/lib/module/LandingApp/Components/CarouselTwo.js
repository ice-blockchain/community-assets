import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { rem, screenWidth } from '../../utils';
import { landingAppImages } from '../../assets/index';
import { COLORS } from '../../styles/colors';
const carouselData = [{
  key: 'one',
  image: landingAppImages.phone1
}, {
  key: 'two',
  image: landingAppImages.phone2
}, {
  key: 'three',
  image: landingAppImages.phone3
}, {
  key: 'four',
  image: landingAppImages.phone4
}];
const ITEM_WIDTH = 240;
export const CarouselTwo = () => {
  const carouselRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(1);
  const renderItem = useCallback(_ref => {
    let {
      item
    } = _ref;
    return /*#__PURE__*/React.createElement(View, {
      key: item.key,
      style: styles.item
    }, /*#__PURE__*/React.createElement(Image, {
      style: styles.image,
      source: item.image,
      resizeMode: "contain"
    }));
  }, []);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Carousel, {
    ref: carouselRef,
    data: carouselData,
    renderItem: renderItem,
    sliderWidth: screenWidth,
    itemWidth: ITEM_WIDTH,
    vertical: false,
    onSnapToItem: setActiveDotIndex,
    inactiveSlideOpacity: 1,
    firstItem: 1
  }), /*#__PURE__*/React.createElement(Pagination, {
    dotsLength: carouselData.length,
    activeDotIndex: activeDotIndex,
    containerStyle: styles.paginationContainer,
    dotStyle: styles.dotStyle,
    inactiveDotStyle: styles.inactiveDot,
    inactiveDotOpacity: 1,
    inactiveDotScale: 1
  }));
};
const styles = StyleSheet.create({
  paginationContainer: {
    paddingTop: rem(14),
    paddingBottom: 0
  },
  container: {
    marginBottom: rem(100),
    marginTop: rem(40)
  },
  item: {
    alignItems: 'center'
  },
  image: {
    width: rem(220),
    height: rem(450)
  },
  dotStyle: {
    backgroundColor: COLORS.white
  },
  inactiveDot: {
    backgroundColor: COLORS.alto,
    opacity: 0.5
  }
});
//# sourceMappingURL=CarouselTwo.js.map