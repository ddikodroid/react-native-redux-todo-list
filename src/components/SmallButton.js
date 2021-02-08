import React from 'react'
import { TouchableOpacity } from 'react-native'
import { WIDTH } from '../styles/Dimension'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SmallButton = ({ style, name, onPress, color }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <Ionicons
        name={name}
        color={color}
        size={WIDTH * 0.065}
      />
    </TouchableOpacity>
  )
}

export default SmallButton
