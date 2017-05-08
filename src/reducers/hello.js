import { HELLO_WORLD, SET_MESSAGE } from '../config/actionType'

const helloWorld = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, { message: 'Hello, World!' })
    case SET_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}

export default helloWorld
