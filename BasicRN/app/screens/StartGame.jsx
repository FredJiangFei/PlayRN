import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function StartGame() {
  const [number, setNumber] = useState();

  const numberInputHandler = (e) => {
    console.log(e);
  };

  const confirm = () => {
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
        />
        <Button title="Cancel" />
        <Button title="Confirm" onPress={confirm} />
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
  },
  input: {
    borderBottomWidth: 2,
    height: 30,
    textAlign: 'center',
  },
});
