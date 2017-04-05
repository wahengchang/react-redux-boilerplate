
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { shallow, mount } from 'enzyme'
import React from 'react'

import helloReducer from '../../reducers'
import HelloWorld from '../../containers/HelloWorld.js'

let store = createStore(helloReducer)

const enzymeWrapper =  mount(
    <Provider store={store}>
        <HelloWorld />
    </Provider>)


describe('containers', () => {
  describe('HelloWorld', () => {
    it('should render self and subcomponents', () => {
        var _message1 = 'Hello'
        var _message2 = 'Hello, World!'

        expect(enzymeWrapper.find('h1').text()).toBe(_message1)
        enzymeWrapper.find('button').simulate('click');
        expect(enzymeWrapper.find('h1').text()).toBe(_message2)
    })
  })
})