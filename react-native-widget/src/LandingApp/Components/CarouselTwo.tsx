import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { rem, screenWidth } from '../../utils';

import { landingAppImages } from '../../assets/index';
import { COLORS } from '../../styles/colors';

type CarouselItem = { key: string; image: number };

const carouselData: CarouselItem[] = [
  { key: 'one', image: landingAppImages.phone1 },
  { key: 'two', image: landingAppImages.phone2 },
  { key: 'three', image: landingAppImages.phone3 },
  { key: 'four', image: landingAppImages.phone4 },
];

const ITEM_WIDTH = 240;

export const CarouselTwo = () => {
  const carouselRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(1);
  const renderItem = useCallback(({ item }: { item: CarouselItem }) => {
    return (
      <View key={item.key} style={styles.item}>
        <Image style={styles.image} source={item.image} resizeMode="contain" />
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={ITEM_WIDTH}
        vertical={false}
        onSnapToItem={setActiveDotIndex}
        inactiveSlideOpacity={1}
        firstItem={1}
      />

      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeDotIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    paddingTop: rem(14),
    paddingBottom: 0,
  },
  container: {
    marginBottom: rem(100),
    marginTop: rem(40),
  },
  item: {
    alignItems: 'center',
  },
  image: {
    width: rem(220),
    height: rem(450),
  },
  dotStyle: {
    backgroundColor: COLORS.white,
  },
  inactiveDot: {
    backgroundColor: COLORS.alto,
    opacity: 0.5,
  },
});
