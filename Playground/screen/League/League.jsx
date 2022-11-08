import { DrawerActions } from '@react-navigation/native';
import { Button, Text } from 'react-native';

export default function League({ navigation }) {
  return (
    <>
      <Text>League</Text>
      <Button
        title="Go to league profile"
        onPress={() => navigation.navigate('LeagueProfile')}
      />

      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </>
  );
}
