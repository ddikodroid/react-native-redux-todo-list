import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import { InputField, Button, TodoCard } from '../components'
import { COLOR } from '../styles/Color'
import { FONT } from '../styles/Dimension'
import { useDispatch, useSelector } from 'react-redux'

const MainScreen = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [newTodo, setNewTodo] = useState()
  const handleSubmit = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random() * 27)
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Today's Task</Text>
      <InputField value={newTodo} onChangeText={(text) => setNewTodo(text)} />
      <Button text='Add Task' onPress={handleSubmit} />
      <FlatList
        data={todos} renderItems={
        ({ todo }) => <TodoCard task={todo} />

      }
      />
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  titleText: {
    ...FONT.h0,
    color: COLOR.black
  }
})
