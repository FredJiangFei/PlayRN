import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import RnText from './RnText';

const RnButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <RnText>{children}</RnText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default RnButton;
