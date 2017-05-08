import apiReducer from '../../src/reducers/jsonAPI.js'

import { createStore } from 'redux'
let store = createStore(apiReducer, {})

describe('github reducer', () => {
  it('should return the initial state', (done) => {
    const _products = [{a: 'a'}];

    store.dispatch({
        type: 'SET_API_DATA',
        products: _products
    });    

    expect(store.getState().products).toBe(_products)
    done()
  })
})