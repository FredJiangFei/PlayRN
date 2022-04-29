import React from 'react';
import { TouchableOpacity } from 'react-native';
import RnText from './RnText';

const RnButton = ({ children }) => {
  return (
    <TouchableOpacity onPress={() => alert('Hello, world!')}>
      <RnText>{children}</RnText>
    </TouchableOpacity>
  );
};

export default RnButton;
