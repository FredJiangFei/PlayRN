import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import RnButton from '../components/RnButton';

export default function StartGame() {
  const [number, setNumber] = useState();

  const numberInputHandler = (e) => {
    setNumber(e);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(number);
    if (!isNaN(chosenNumber)) Alert.alert('Invalid number!');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <Text style={styles.title}>Start a New Game</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={number}
        />
        <RnButton title="Cancel" />
        <RnButton title="Confirm" onPress={confirmInputHandler} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
    fontSize: 24,
    fontFamily: 'open-sans-bold',
  },
  input: {
    borderBottomWidth: 2,
    height: 30,
    textAlign: 'center',
  },
});
