import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface CustomSliderProps {
  title: string; // Change to lowercase 'string'
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ title, onChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    onChange(value);
  };

  return (
    <View>
      <Text>{title}</Text>
      <Text>Slider Value: {sliderValue}</Text>
      <Slider
        value={sliderValue}
        onValueChange={handleSliderChange}
        minimumValue={0}
        maximumValue={100}
        step={1}
      />
    </View>
  );
};

export default CustomSlider;
