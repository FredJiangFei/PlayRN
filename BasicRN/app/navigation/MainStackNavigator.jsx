import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitle: 'Fred Home',
        headerStyle: {
          backgroundColor: 'yellow'
        },
        headerTintColor : 'red'
      }}/>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

// const MainStackNavigator = createStackNavigator({
//   Home: Home,
//   About: About,
// });
export { MainStackNavigator };
