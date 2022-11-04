import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './MainStackNavigator';
import { ContactStackNavigator } from './ContactStackNavigator';
import { Ionicons } from '@expo/vector-icons';
import { TodoStackNavigator } from './TodoStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={{
          tabBarIcon: makeIconRender('home'),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: makeIconRender('cog'),
        }}
      />
      <Tab.Screen name="Todo" component={TodoStackNavigator} />
    </Tab.Navigator>
  );
};

function makeIconRender(name) {
  return ({ color, size, tintColor }) => (
    <Ionicons name={name} color={color} size={size} />
  );
}

export default BottomTabNavigator;
