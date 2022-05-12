import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './MainStackNavigator';
import { ContactStackNavigator } from './ContactStackNavigator';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: makeIconRender("home")
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: makeIconRender("cog")
        }}
      />
    </Tab.Navigator>
  );
};

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

export default BottomTabNavigator;
