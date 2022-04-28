import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'
import Icon from '../components/Icon'
import { useAuth } from '../hooks/useAuth'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
]

export default function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth()

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Super Mario"
          description="mario@gmail.com"
          image={require('../../assets/mario.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(m) => m.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log("123")}
            />
          )}
        />
      </View>
      <ListItem
        onPress={logOut}
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },

  container: {
    marginVertical: 20,
  },
})
