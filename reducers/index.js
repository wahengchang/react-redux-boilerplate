import { combineReducers } from 'redux'
import { HELLO_WORLD, SET_MESSAGE } from './../actions'

const helloWorld = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { message: 'Hello, World!' })
    case SET_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}

const helloReducer = combineReducers({
  helloWorld
})

export default helloReducer
