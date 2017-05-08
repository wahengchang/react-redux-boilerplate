import {
  SET_API_DATA
} from '../config/actionType'

const apiReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case SET_API_DATA:
      return Object.assign({}, state, { products: action.products })
    default:
      return state
  }
}

export default apiReducer
