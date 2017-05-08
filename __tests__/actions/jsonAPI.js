import jsonAPIActionCreator from '../../src/actions/jsonAPI'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

describe('api action creator', () => {
  it('get apiJSON title', (done) => {
    var mockData = [{title:'_title'}]
    fetch.mockResponse(JSON.stringify(mockData))

    const store = mockStore({})
    const expectedActions = [
      { type: 'SET_API_DATA', products: mockData }
    ]

    store.dispatch(jsonAPIActionCreator.getJsonAPI())
      .then((res) => {
        // expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  }, 5000)
})