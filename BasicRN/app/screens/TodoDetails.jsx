import { CommonActions, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const TodoDetails = ({ navigation, route }) => {
  const id = route.params.todoId;
  // show params to title?

  const handleBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <View style={styles.container}>
      <Text>Todo details {id}</Text>
      <Pressable onPress={handleBack}>
        <Text>Go Back</Text>
      </Pressable>
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
export default TodoDetails;
