import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function ElIconButton({ onPress, children, ...rest }) {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      {children}
    </TouchableOpacity>
  )
}
