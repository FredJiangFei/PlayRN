import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import TeamDetailsScreen from '../screens/TeamDetailsScreen';
import TeamListScreen from '../screens/TeamListScreen';

const Stack = createNativeStackNavigator();

const TeamNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.TeamList}
      component={TeamListScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.TeamDetails}
      component={TeamDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default TeamNavigator;
