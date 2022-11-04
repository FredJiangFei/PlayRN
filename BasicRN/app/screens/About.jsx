import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const About = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Second Page', //Set Header Title
      headerTitle: (props) => (
        <Text {...props} style={{ color: 'white', fontWeight: 'bold' }}>
          Custom Title
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('Right Menu Clicked')}
          style={{ marginRight: 10 }}
        >
          <Text style={{ color: 'white' }}>Right Menu</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>This is the About screen!</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('Todo', {
            screen: 'TodoDetails',
            params: {
              todoId: 1,
            },
            initial: false,
          })
        }
      >
        <Text>Go to do</Text>
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
export default About;
