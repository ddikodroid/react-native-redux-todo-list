import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './todoTypes'

let nextTodoId = 0

export const addTodo = (task) => ({
  type: ADD_TODO,
  data: {
    id: nextTodoId++,
    task: task,
    completed: false
  }
})
export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  data: todoId
})

export const completeTodo = (todoId) => ({
  type: COMPLETE_TODO,
  data: todoId
})
