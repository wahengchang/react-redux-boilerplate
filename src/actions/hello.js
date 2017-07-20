import { HELLO_WORLD, SET_MESSAGE } from '../config/actionType'

const helloActionCreator = {
  helloWorld: () => {
    return (dispatch, getState) => {
      return dispatch({
        type: HELLO_WORLD,
      })
    }
  },
  setMessage: (_message) => {
    return (dispatch, getState) => {
      return dispatch({
        type: SET_MESSAGE,
        message: _message
      })
    }
  }
}
export default helloActionCreator