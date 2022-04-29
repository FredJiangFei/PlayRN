import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Home screen!</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
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
export default Home;
