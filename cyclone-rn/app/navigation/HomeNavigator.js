import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import routes from './routes';
import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen';
import TeamNavigator from './TeamNavigator';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default HomeNavigator = () => {
  const getOptions = (icon) => {
    return {
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name={icon} color={color} size={size} />
      )
    };
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.Home}
        component={HomeScreen}
        options={getOptions('home')}
      />
      <Tab.Screen
        name={routes.Calendar}
        component={CalendarScreen}
        options={getOptions('calendar')}
      />
      <Tab.Screen
        name={routes.Teams}
        component={TeamNavigator}
        options={getOptions('microsoft-teams')}
      />
      <Tab.Screen
        name={routes.Account}
        component={AccountScreen}
        options={getOptions('account')}
      />
    </Tab.Navigator>
  );
};
