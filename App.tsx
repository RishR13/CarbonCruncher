import React, { useState } from 'react';

import {Slider} from '@miblanchard/react-native-slider';
import { Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import CustomSlider from './CustomSlider';


import { View } from 'react-native';
import SliderCarousel from './SliderCarousel';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SliderCarousel />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 2, // Adjust the width
    height: 2, // Adjust the height
  }
})

export default App;