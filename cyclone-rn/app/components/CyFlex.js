import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function CyFlex({ children, style, ...rest }) {
  return (
    <View style={[styles.root, style]} {...rest}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
