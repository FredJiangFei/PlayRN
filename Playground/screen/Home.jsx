import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Messages from './Messages';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}
