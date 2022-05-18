import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import logo from './assets/mario.png';
import RnImagePicker from './app/components/RnImagePicker';
import RnText from './app/components/RnText';
import RnImage from './app/components/RnImage';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './app/navigation/BottomTabNavigator';
import Card from './app/components/Card';
import RnFlastList from './app/components/RnFlastList';
import Header from './app/components/Header';
import StartGame from './app/screens/StartGame';
import React, { useState } from 'react';
import { Dimensions } from 'react-native-web';

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
    // <StartGame />
    //  <View style={styles.container}>
    //     <RnText>Hello, RN</RnText>
    //     <RnImage source={logo} />
    //     <RnImage source={require('./assets/mario.png')} />
    //     <RnImage source={{ uri: 'https://picsum.photos/id/237/200/300' }} />
    //     <RnImagePicker />
    //     <RnFlastList />
    //  </View>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>

    // #### Game guess number
    //   TextInput
    //   Button onPress
    //   FlatList, numColumns
    //   Touchable
    //   Modal visible/animationType
    //  Keyboard.dismiss()
    // customer font
    // Image, require(''), resizeMode, image in a circle View container
    // @expo/vector-icons, Ionicons
    // 第三方控件 https://docs.expo.dev/guides/userinterface/ // ScrollView, contentContainerStyle
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

    // version 4
    // stack navigator
    // 1. createStackNavigator
    // 2. NavigationContainer
    // navigation.navigate('Home')}
    // navigation.push('Home')}
    // navigation.goBack()
    // navigation.pop()
    // navigation.popToTop()
    // navigation.replace(), login

    // defaultNavigationOptions
    // mode: modal 从下面弹出
    // initialRouteName
    // useScreens/enableScreens 'react-native-screens' 提升性能

    // ImageBackground
    // react-navigation-header-buttons,

    // tab navigator
    // createBottomTabNavigator
    // tabBarOptions: activeTintColor

    // react-navigation-material-bottom-tabs / createMaterialBottomTabNavigator
    // shifting
    // tabBarColor

    // react-native-paper

    // drawer
    // drawer > tab > stack
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
