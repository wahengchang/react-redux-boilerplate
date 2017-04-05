export const HELLO_WORLD = 'HELLO_WORLD'
export const SET_MESSAGE = 'SET_MESSAGE'


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