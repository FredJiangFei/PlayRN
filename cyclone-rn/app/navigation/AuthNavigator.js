import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={routes.Login}>
    <Stack.Screen
      name={routes.Welcome}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.Login}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.Register}
      component={RegisterScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;