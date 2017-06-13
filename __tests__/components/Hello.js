import React from 'react'
import {shallow} from 'enzyme'
import Hello from '../../src/components/Hello'

jest.mock('../../src/components/Hello.css', () => {
  return jest.fn()
})

var _mockMessage = 'mock message'
var _mockFun = jest.fn()
function setup() {
  const props = {
    onClick: _mockFun,
    message: _mockMessage
  }

  const enzymeWrapper = shallow(<Hello {...props}/>)

  return {props, enzymeWrapper}
}

describe('components', () => {
  it('should render self and subcomponents', (done) => {
    const {enzymeWrapper} = setup()
    const newMessage = 'Hello, World!'

    expect(enzymeWrapper.find('h1').text()).toBe(_mockMessage)
    enzymeWrapper.find('button').simulate('click')
    expect(_mockFun).toBeCalled()

    done()
  })
})