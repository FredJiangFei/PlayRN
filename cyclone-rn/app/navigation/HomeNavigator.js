import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import routes from './routes'
import CalendarScreen from '../screens/CalendarScreen'
import HomeScreen from '../screens/HomeScreen'
import TeamNavigator from './TeamNavigator'
import AccountScreen from '../screens/AccountScreen'

const Tab = createBottomTabNavigator()

export default HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Calendar}
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Teams}
        component={TeamNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="microsoft-teams"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Account}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
