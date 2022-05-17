import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoDetails = ({ navigation, route }) => {
  const id = route.params.todoId;
  // show params to title?

  return (
    <View style={styles.container}>
      <Text>Todo details {id}</Text>
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
