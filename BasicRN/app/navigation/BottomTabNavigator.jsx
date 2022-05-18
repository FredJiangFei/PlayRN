import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './MainStackNavigator';
import { ContactStackNavigator } from './ContactStackNavigator';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { TodoStackNavigator } from './TodoStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: 'red' }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel:'New home',
          tabBarIcon: makeIconRender('home'),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: makeIconRender('cog'),
        }}
      />
      <Tab.Screen
        name="Todo"
        component={TodoStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

function makeIconRender(name) {
  return ({ color, size, tintColor }) => (
    // <MaterialCommunityIcons name={name} color={color} size={size} />
    <Ionicons name={name} color={color} size={size}/>
  );
}

export default BottomTabNavigator;
