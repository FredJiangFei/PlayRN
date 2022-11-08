import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeagueNavigator from './LeagueNavigator';
import TeamNavigator from './TeamNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="League Tab" component={LeagueNavigator} />
      <Tab.Screen name="Team Tab" component={TeamNavigator} />
    </Tab.Navigator>
  );
}
