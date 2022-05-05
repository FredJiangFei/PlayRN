import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import logo from './assets/mario.png';
import RnImagePicker from './app/components/RnImagePicker';
import RnText from './app/components/RnText';
import RnImage from './app/components/RnImage';
import RnButton from './app/components/RnButton';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './app/navigator/BottomTabNavigator';
import Card from './app/components/Card';
import RnFlastList from './app/components/RnFlastList';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <RnText>Hello, RN</RnText>
      <RnImage source={logo} />
      <RnImage source={{ uri: 'https://picsum.photos/id/237/200/300' }} />
      <RnButton>Say Hello</RnButton>
      <RnImagePicker /> 
      <RnFlastList />  */}

       {/* TextInput */}
       {/* Button */}
       {/* FlatList */}
       {/* Touchable */}
    </View>

    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
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
