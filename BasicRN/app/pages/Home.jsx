import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Home screen!</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
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
