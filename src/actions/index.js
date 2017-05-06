import { HELLO_WORLD, SET_MESSAGE } from '../config/actionType'



export const helloWorld = () => {
  console.log('helloWorld actions')
  return {
    type: HELLO_WORLD
  }
}

export const setMessage = (_message) => {
  console.log('helloWorld actions')
  return {
    type: SET_MESSAGE,
    message: _message
  }
}