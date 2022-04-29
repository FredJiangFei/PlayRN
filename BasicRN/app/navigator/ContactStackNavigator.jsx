import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../pages/Contact';

const Stack = createStackNavigator();
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export { ContactStackNavigator };
