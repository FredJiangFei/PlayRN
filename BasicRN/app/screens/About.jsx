import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const About = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Second Page', //Set Header Title
      headerTitle: (props) => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold'}}>
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
      // headerLeft: () => (
      //   <TouchableOpacity
      //     onPress={() => alert('Left Menu Clicked')}
      //     style={{ marginLeft: 10 }}
      //   >
      //     <Text style={{ color: 'white' }}>Left Menu</Text>
      //   </TouchableOpacity>
      // ),
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
