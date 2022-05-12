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
import Header from './app/components/Header';
import StartGame from './app/screens/StartGame';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Dimensions } from 'react-native-web';

// 4.22 Add custom fonts
// const fetchFonts = () => {
//   Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// };

export default function App() {
  // const [load, setLoad] = useState(false);

  // if (!load)
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setLoad(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );

  return (
    <StartGame />
    //  <View style={styles.container}>
    //     <RnText>Hello, RN</RnText>
    //     <RnImage source={logo} />
    // <RnImage source={require('./assets/mario.png')} />
    //     <RnImage source={{ uri: 'https://picsum.photos/id/237/200/300' }} />
    //     <RnButton>Say Hello</RnButton>
    //     <RnImagePicker />
    //     <RnFlastList />
    //     </View>

    // #### Game guess number
    //   TextInput
    //   Button onPress
    //   FlatList
    //   Touchable
    //   Modal visible/animationType
    //  Keyboard.dismiss()
    // customer font
    // Image, require(''), resizeMode, image in a circle View container
    // @expo/vector-icons, Ionicons
    // 第三方控件 https://docs.expo.dev/guides/userinterface/
    // ScrollView, contentContainerStyle
    // FlatList, default arg is last arg, contentContainerStyle

    // #### Responsive & Platform

    // Dimensions
    // 1. box: width + minWidth / maxWidth
    // 2. button width: Dimensions.get('window').width / 3 (only calculate when app start)
    //  Dimensions.get('window').heigh > 600 ? 20 : 10
    //  image: Dimensions.get('window').width * 0.7

    // Rotate
    // app.json, orientation: portrait, landscape, default
    // KeyboardAvoidingView 避免输入框弹出遮挡input, behavior: position/padding, keyboardVerticalOffset
    // Dimensions.addEventListener('change', ()=>{ });
    // import { ScreenOrientation } from 'expo', lockAsync/

    // # Platform
    // Platform.OS === 'android' | 'ios'
    // Platform.select(ios: iosStyle, android: androidStyle)
    // Platform.Version
    // Button.ios.js/Button.android.js

    // TouchableNativeFeedback
    // SafeAreaView
  
    // # Navigation
    // Different with Web
    // Web, url => Component
    // Native, Tabs/Stack => Component
    // react-navigation 


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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
});
