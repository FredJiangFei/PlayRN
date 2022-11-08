import { createDrawerNavigator } from '@react-navigation/drawer';
import MyProfile from '../screen/MyProfile';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
