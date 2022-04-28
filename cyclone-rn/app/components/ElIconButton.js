import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function ElIconButton({ onPress, children }) {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
}
