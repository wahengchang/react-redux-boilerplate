
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { shallow, mount } from 'enzyme'
import React from 'react'
import thunk from 'redux-thunk'

import HelloWorld from '../../src/containers/HelloWorld.js'

import reducer from '../../src/reducers'

jest.mock('../../src/components/Hello.css', () => {
  return jest.fn()
})
jest.mock('../../src/styles/global.css', () => {
  return jest.fn()
})


let store = createStore(
    reducer, 
    compose(applyMiddleware(thunk))
)

const enzymeWrapper =  mount(
    <Provider store={store}>
        <HelloWorld />
    </Provider>)

describe('containers', () => {
    it('should render self and subcomponents', (done) => {
        var _message1 = 'Hello'
        var _message2 = 'Hello, World!'

        expect(enzymeWrapper.find('h1').text()).toBe(_message1)
        enzymeWrapper.find('button').simulate('click');
        expect(enzymeWrapper.find('h1').text()).toBe(_message2)
        done()
    })
})