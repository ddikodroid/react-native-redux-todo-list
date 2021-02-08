import { ADD_TODO, DELETE_TODO } from './actionTypes'

const initialState = {
  todo: []
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, // return current state
        todo: [...state.todo, action.payload] // append+add the new todo
      }
    case DELETE_TODO:
      return {
        ...state, // return current state
        todo: state.todo.filter(todo => todo.id !== action.payload) // filter todo by id
      }
    default:
      return state
  }
}

export default reducers
