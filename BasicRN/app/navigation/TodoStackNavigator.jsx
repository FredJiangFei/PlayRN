import { createStackNavigator } from '@react-navigation/stack';
import Todo from '../screens/Todo';
import TodoDetails from '../screens/TodoDetails';

const Stack = createStackNavigator();
const TodoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos" component={Todo} />
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
    </Stack.Navigator>
  );
};

export { TodoStackNavigator };
