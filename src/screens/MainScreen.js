import React, { useState } from 'react'
import { COLOR } from '../styles/Color'
import { FONT } from '../styles/Dimension'
import { addTodo } from '../redux/actions/todoAction'
import { useSelector, useDispatch } from 'react-redux'
import { InputField, Button, TodoCard } from '../components'
import { StyleSheet, Text, SafeAreaView, Alert, FlatList } from 'react-native'

const MainScreen = () => {
  const [todoText, setTodoText] = useState('')

  const todoList = useSelector(state => state.todoReducer.todoList)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    todoText.length > 0
      ? dispatch(addTodo(todoText))
      : Alert.alert('No text entered...')
  }
  console.log(todoText)
  console.log(todoList)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Today's Task</Text>
      <InputField
        placeholder='Write a task here...'
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button text='Add Task' onPress={() => handleAddTodo()} />
      <FlatList
        data={todoList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          return (
            <TodoCard data={item} />
          )
        }}
      />
    </SafeAreaView>
  )
}

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

export default MainScreen
