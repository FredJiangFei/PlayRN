import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native'

export default function Link({ children, to }) {
  const navigation = useNavigation()
  return (
    <Text style={styles.link} onPress={() => navigation.navigate(to)}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  link: {
    color: '#17C476',
  },
})
