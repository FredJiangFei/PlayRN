import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const getOptions = () => {
    return {
      headerShown: false,
    };
  };

  return (
    <Stack.Navigator initialRouteName={routes.Login}>
      <Stack.Screen
        name={routes.Welcome}
        component={WelcomeScreen}
        options={getOptions()}
      />
      <Stack.Screen
        name={routes.Login}
        component={LoginScreen}
        options={getOptions()}
      />
      <Stack.Screen
        name={routes.Register}
        component={RegisterScreen}
        options={getOptions()}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
