import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors'

const RnButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: '100%',
      marginVertical: 10,
  },
  text: {
      color: colors.white,
      fontSize: 18,
      fontWeight: 'bold',
  },
})


export default RnButton;
