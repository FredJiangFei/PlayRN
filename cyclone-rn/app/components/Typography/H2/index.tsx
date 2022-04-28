import React from 'react'
import { Text } from 'react-native'
import { H4Type } from '..'
import { styles } from './styles'

export const H2: React.FC<H4Type> = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>
}
