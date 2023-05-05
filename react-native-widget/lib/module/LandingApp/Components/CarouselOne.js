import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { font, rem, screenWidth } from '../../utils';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';
export const CarouselOne = _ref => {
  let {
    translations
  } = _ref;
  const carouselData = [{
    title: translations.carousel_items.one.title,
    description: translations.carousel_items.one.description,
    size: {
      width: rem(76),
      height: rem(80)
    },
    icon: require('../../assets/carouselItems/freeToMine.png')
  }, {
    title: translations.carousel_items.two.title,
    description: translations.carousel_items.two.description,
    icon: require('../../assets/carouselItems/availableWorldwide.png'),
    size: {
      width: rem(86),
      height: rem(75)
    }
  }, {
    title: translations.carousel_items.three.title,
    description: translations.carousel_items.three.description,
    icon: require('../../assets/carouselItems/noBatteryDrain.png'),
    size: {
      width: rem(83),
      height: rem(75)
    }
  }, {
    title: translations.carousel_items.four.title,
    description: translations.carousel_items.four.description,
    icon: require('../../assets/carouselItems/decentralized.png'),
    size: {
      width: rem(78),
      height: rem(76)
    }
  }, {
    title: translations.carousel_items.five.title,
    description: translations.carousel_items.five.description,
    icon: require('../../assets/carouselItems/communityBased.png'),
    size: {
      width: rem(78),
      height: rem(75)
    }
  }, {
    title: translations.carousel_items.six.title,
    description: translations.carousel_items.six.description,
    icon: require('../../assets/carouselItems/transparent.png'),
    size: {
      width: rem(87.5),
      height: rem(75)
    }
  }];
  const carouselRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const renderItem = _ref2 => {
    let {
      item
    } = _ref2;
    return /*#__PURE__*/React.createElement(View, {
      key: item.title,
      style: styles.itemWrapper
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.item
    }, /*#__PURE__*/React.createElement(Image, {
      style: item.size,
      source: item.icon
    }), /*#__PURE__*/React.createElement(Text, {
      style: styles.itemTitle
    }, item.title), /*#__PURE__*/React.createElement(Text, {
      style: styles.itemSubtitle
    }, item.description)));
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Carousel, {
    ref: carouselRef,
    data: carouselData,
    renderItem: renderItem,
    sliderWidth: screenWidth,
    itemWidth: 242,
    vertical: false,
    onSnapToItem: setActiveDotIndex
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
    paddingTop: rem(8),
    paddingBottom: 0
  },
  container: {
    marginTop: rem(33)
  },
  item: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: rem(18),
    paddingTop: rem(20),
    paddingBottom: rem(40),
    borderRadius: rem(16),
    shadowColor: COLORS.darkGrey,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: font(20),
    lineHeight: rem(24),
    fontFamily: FONTS.lato.heavy,
    color: COLORS.downriver,
    marginTop: rem(28),
    marginBottom: rem(31)
  },
  itemSubtitle: {
    textAlign: 'center',
    fontSize: font(13),
    lineHeight: rem(20),
    fontFamily: FONTS.lato.medium,
    color: COLORS.downriver
  },
  itemWrapper: {
    paddingVertical: rem(12),
    paddingHorizontal: rem(6)
  },
  dotStyle: {
    backgroundColor: COLORS.downriver
  },
  inactiveDot: {
    backgroundColor: COLORS.alto
  }
});
//# sourceMappingURL=CarouselOne.js.map