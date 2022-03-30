import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/mario.png';
import RnImagePicker from './app/components/RnImagePicker';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Text */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      {/* Image */}
      {/* <Image source={logo} style={{ width: 305, height: 159 }} />
      <Image source={{ uri: "https://picsum.photos/id/237/200/300" }} style={{ width: 305, height: 159 }} /> */}
    
      {/* Button */}
      {/* <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Say Hello</Text>
      </TouchableOpacity> */}

      {/* ImagePicker */}
      <RnImagePicker />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
