import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import routes from './routes'
import CalendarScreen from '../screens/CalendarScreen'
import HomeScreen from '../screens/HomeScreen'
import UserNavigator from './UserNavigator'
import AccountNavigator from './AccountNavigator'
import colors from '../config/colors'
import { StyleSheet, View } from 'react-native'
import Search from '../svgs/search'
import Notification from '../svgs/notification'
import Message from '../svgs/message'
import Menu from '../svgs/menu'
import GoBack from './../svgs/goBack'
import defaultStyles from '../config/styles'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  const getOptions = (icon) => {
    return {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name={icon} color={color} size={size} />
      ),
    }
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerRight: () => (
          <View style={styles.menuBar}>
            <Search style={defaultStyles.mr8} />
            <Notification style={defaultStyles.mr8} />
            <Message style={defaultStyles.mr8} />
            <Menu style={defaultStyles.mr8} />
          </View>
        ),
        headerLeft: () => <GoBack style={defaultStyles.ml8} />,
      }}
    >
      <Tab.Screen
        name={routes.Home}
        component={HomeScreen}
        options={getOptions('home')}
      />
      <Tab.Screen
        name={routes.Calendar}
        component={CalendarScreen}
        options={getOptions('calendar')}
      />
      <Tab.Screen
        name={routes.Users}
        component={UserNavigator}
        options={getOptions('nature-people')}
      />
      <Tab.Screen
        name={routes.Account}
        component={AccountNavigator}
        options={getOptions('account')}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  menuBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default HomeNavigator
