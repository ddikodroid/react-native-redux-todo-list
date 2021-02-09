import React from 'react'
import SmallButton from './IconButton'
import { COLOR } from '../styles/Color'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { WIDTH, HEIGHT, FONT } from '../styles/Dimension'
import { deleteTodo, completeTodo } from '../redux/actions/todoAction'

const TodoCard = ({ data }) => {
  const dispatch = useDispatch()
  const { id, task, completed } = data
  const onDeleteTodo = (todoId) => dispatch(deleteTodo(todoId))
  const onCompleteTodo = (todoId) => dispatch(completeTodo(todoId))
  return (
    <View style={{
      ...styles.taskContainer,
      borderColor: completed ? COLOR.secondary : COLOR.primary
    }}
    >
      <View style={{
        flexDirection: 'row',
        marginRight: 5
      }}
      >
        <SmallButton
          name='checkmark-circle'
          color={completed ? COLOR.primary : COLOR.grayish}
          onPress={() => onCompleteTodo(id)}
        />
      </View>
      <View style={{
        maxWidth: '70%'
      }}
      >
        <Text style={{
          ...styles.textDefault,
          textDecorationLine: completed ? 'line-through' : null
        }}
        >
          {task}
        </Text>
      </View>
      <View style={{
        flexDirection: 'row-reverse',
        marginRight: 5
      }}
      >
        <SmallButton
          name='close-circle'
          color={COLOR.red}
          onPress={() => onDeleteTodo(id)}
        />
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
    ...FONT.body2,
    color: COLOR.black,
    textDecorationLine: null
  }
})
