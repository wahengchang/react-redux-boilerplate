import {
  SET_API_DATA
} from '../config/actionType'

import apis from './api.js'

const jsonAPIActionCreator = {
  getJsonAPI : () => {
  console.log(' jsonAPI -------1 ')
    return function (dispatch, getState) {
      return apis.getJsonAPI().then((res)=> {
        dispatch({
            type: SET_API_DATA,
            products: res
          })
      })
    }
  }
}
export default jsonAPIActionCreator