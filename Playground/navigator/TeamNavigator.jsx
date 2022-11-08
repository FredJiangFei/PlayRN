import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Team from '../screen/Team/Team';
import TeamProfile from '../screen/Team/TeamProfile';

const Stack = createNativeStackNavigator();

export default function TeamNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Team" component={Team} />
      <Stack.Screen name="TeamProfile" component={TeamProfile} />
    </Stack.Navigator>
  );
}
