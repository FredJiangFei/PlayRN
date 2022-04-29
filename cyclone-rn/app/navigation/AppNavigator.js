import React from 'react';
import theme from './navigationTheme';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import Screen from '../components/Screen';

const AppNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer theme={theme}>
      {user ? (
        <Screen>
          <HomeNavigator />
        </Screen>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
