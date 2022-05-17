import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { todos } from '../data/dummy-data';

const Todo = ({ navigation }) => {
  const renderTodo = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            name: 'TodoDetails',
            params: {
              todoId: item.id,
            },
          })
        }
      >
        <View style={styles.todo}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList data={todos} renderItem={renderTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
  todo: {
    fontSize: 16,
    margin: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Todo;
