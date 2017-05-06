import githubReducers from '../../src/reducers/github.js'

import { createStore } from 'redux'
let store = createStore(githubReducers, {})

describe('github reducer', () => {
  it('should return the initial state', () => {
    const _username = '_username';

    store.dispatch({
        type: 'SET_GITHUB_USER',
        username: _username
    });    

    expect(store.getState().username).toBe(_username)
  })
})