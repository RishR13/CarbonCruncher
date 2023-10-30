import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'; // Use ScrollView for vertical scrolling
import CustomSlider from './CustomSlider';
import { RadioButton } from 'react-native-paper';

const SliderCarousel: React.FC = () => {
  const [sliderValue, setSliderValue] = useState([0, 0, 0]);
  const [recycleNewspaper, setRecycleNewspaper] = useState('no');
  const [selected, setSelected] = useState(false);
  const [accumulator, setAccumulator] = useState(0);

  useEffect(() => {
    setAccumulator(0);
  }, [recycleNewspaper]);

  const handleSliderChange = (index: number, value: number) => {
    const newSliderValue = [...sliderValue];
    newSliderValue[index] = value;
    setSliderValue(newSliderValue);
  };

  const calculateResult = sliderValue.reduce((accumulator, currentValue, index) => {
    const multiplicationFactors = [0.79, 1.2, 1.0];
    if (recycleNewspaper === 'no' && selected) {
      return accumulator + currentValue * multiplicationFactors[index] + 60;
    }
    return accumulator + currentValue * multiplicationFactors[index];
  }, 0);

  const customSliderMessages = [
    `${sliderValue[0] <= 50 ? 'Good job on using less electricity!' : 'Turn off the lights when you leave a room'}`,
    `${sliderValue[1] <= 50 ? 'Great job on using less gas!' : 'Try walking or biking to your destination'}`,
    `${sliderValue[2] <= 50 ? 'Amazing effort on flying less' : 'Try finding a destination closer to home'}`,
  ];

  return (
    <ScrollView contentContainerStyle={styles.wrapper} scrollEnabled={true}>
      <Text style={styles.title}>Welcome to Carbon Cruncher!</Text>
      <View style={styles.slide}>
        <CustomSlider
          onChange={(value) => handleSliderChange(0, value)}
          title={"What is your estimated monthly electricity bill? (0 = $100 100 = $200)"}
        />
      </View>
      <View style={styles.slide}>
        <CustomSlider
          onChange={(value) => handleSliderChange(1, value)}
          title={"What is your estimated monthly car gas bill? (0 = $100 100 = $200)"}
        />
      </View>
      <View style={styles.slide}>
        <CustomSlider
          onChange={(value) => handleSliderChange(2, value)}
          title={"How many hours of flights have you taken in the last year?"}
        />
      </View>
      <View style={styles.slide}>
        <Text>Do you Recycle Newspapers and Cans?</Text>
        <RadioButton.Group
          onValueChange={(value) => {
            setSelected(true);
            setRecycleNewspaper(value);
          }}
          value={recycleNewspaper}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton.Android value="yes" />
            <Text>Yes</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton.Android value="no" />
            <Text>No</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.slide}>
        <Text>Calculated Value: {calculateResult}</Text>
        <Text>{customSliderMessages[0]}</Text>
        <Text>{customSliderMessages[1]}</Text>
        <Text>{customSliderMessages[2]}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexGrow: 1, // Allows the content to grow and fill the available space
    alignItems: 'center', // Center the content horizontally
    paddingVertical: 20, // Add vertical padding for spacing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Add bottom margin for spacing
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Use 100% width for full-width content
    paddingHorizontal: 20, // Add horizontal padding for spacing
  },
});

export default SliderCarousel;
