import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  const getOptions = () => {
    return {
      headerShown: false,
    };
  };

  return (
    <Stack.Navigator initialRouteName={routes.Account}>
      <Stack.Screen
        name={routes.Account}
        component={AccountScreen}
        options={getOptions()}
      />
      <Stack.Screen
        name={routes.Settings}
        component={SettingsScreen}
        options={getOptions()}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
