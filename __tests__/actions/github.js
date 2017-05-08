import {getGithubUser} from '../../src/actions/github.js'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

describe('api action creator', () => {
  it('get github user', (done) => {
    fetch.mockResponse(JSON.stringify({login: 'waheng' }))

    const store = mockStore({})
    const expectedActions = [
      { type: 'SET_GITHUB_USER', username: 'waheng' }
    ]

    store.dispatch(getGithubUser())
      .then((res) => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  }, 5000)
})