import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './MainStackNavigator';
import { ContactStackNavigator } from './ContactStackNavigator';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { TodoStackNavigator } from './TodoStackNavigator';
import { Text, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: 'red' }}>
      {/* options={{
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => alert('Left Menu Clicked')}
          style={{ marginLeft: 10 }}
        >
          <Text style={{ color: 'white' }}>Left Menu</Text>
        </TouchableOpacity>
      ),
    }} */}
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
