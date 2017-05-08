import { combineReducers } from 'redux'
import hello from './hello'
import jsonAPI from './jsonAPI'

const reducer = combineReducers({
  jsonAPI,
  hello
})

export default reducer
