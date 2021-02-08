import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SmallButton from './SmallButton'
import { WIDTH, HEIGHT, FONT } from '../styles/Dimension'
import { COLOR } from '../styles/Color'

const TodoCard = (props) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const handleIsCompleted = () => {
    setIsCompleted(!isCompleted)
  }
  return (
    <View style={{ ...styles.taskContainer, borderColor: isCompleted ? COLOR.secondary : COLOR.primary }}>
      <View style={{ flexDirection: 'row', marginRight: 5 }}>
        <SmallButton name='checkmark-circle' color={isCompleted ? COLOR.primary : COLOR.grayish} onPress={handleIsCompleted} />
      </View>
      <View style={{
        maxWidth: '90%'
      }}
      >
        <Text style={{ ...styles.textDefault, textDecorationLine: isCompleted ? 'line-through' : null }}>{props.task}</Text>
      </View>
      <View style={{ flexDirection: 'row-reverse', marginRight: 5 }}>
        <SmallButton name='close-circle' color={COLOR.red} onPress={props.onPressDelete} />
      </View>
    </View>
  )
}

export default TodoCard

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: WIDTH * 0.90,
    height: HEIGHT * 0.075,
    borderRadius: WIDTH * 0.02,
    marginVertical: HEIGHT * 0.01,
    backgroundColor: COLOR.white,
    padding: WIDTH * 0.015,
    borderWidth: 1.5,
    justifyContent: 'space-between'
  },
  textDefault: {
    ...FONT.body3,
    color: COLOR.black,
    textDecorationLine: null
  }
})
