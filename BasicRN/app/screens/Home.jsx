import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ElSlider from '../components/ElSlider';

const Home = ({ navigation }) => {
  const [rangeValue, setRangeValue] = useState([0, 3]);

  return (
    <View style={styles.container}>
      <ElSlider min={0} max={20} value={rangeValue} onChange={setRangeValue} />
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
        // onPress={() => navigation.push('Home')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Container = styled(View)`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export default Home;
