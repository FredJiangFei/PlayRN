import React from 'react'
import { H4Type } from '..'
import { styles } from './styles'
import { Text } from 'react-native'

export const H5: React.FC<H4Type> = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>
}
