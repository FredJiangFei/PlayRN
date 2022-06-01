import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import UserListScreen from '../screens/UserListScreen';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  const getOptions = () => {
    return {
      headerShown: false,
    };
  };

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={routes.UserList}
        component={UserListScreen}
        options={getOptions()}
      />
      <Stack.Screen
        name={routes.UserDetails}
        component={UserDetailsScreen}
        options={getOptions()}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
