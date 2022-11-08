import { createNativeStackNavigator } from '@react-navigation/native-stack';
import League from '../screen/League/League';
import LeagueProfile from '../screen/League/LeagueProfile';

const Stack = createNativeStackNavigator();

export default function LeagueNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="League" component={League} />
      <Stack.Screen name="LeagueProfile" component={LeagueProfile} />
    </Stack.Navigator>
  );
}
