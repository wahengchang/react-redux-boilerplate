import {
  SET_GITHUB_USER
} from '../config/actionType'

const github = (state = {}, action) => {
  switch (action.type) {
    case SET_GITHUB_USER:
      return Object.assign({}, state, { username: action.username })
  }
}

export default github
