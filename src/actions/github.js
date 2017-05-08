import {
  SET_GITHUB_USER
} from '../config/actionType'

import apis from './api.js'

export const getGithubUser = () => {
    return function (dispatch, getState) {
      return apis.getGithubUser('waheng').then((res)=> {
        dispatch({
            type: SET_GITHUB_USER,
            username: res.login
          })
      })
    }
}