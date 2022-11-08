import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LeagueNavigator from './LeagueNavigator';
import TeamNavigator from './TeamNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My League" component={LeagueNavigator} />
        <Tab.Screen name="My Team" component={TeamNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
