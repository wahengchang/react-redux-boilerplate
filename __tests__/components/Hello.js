import React from 'react'
import {shallow} from 'enzyme'
import Hello from '../../src/components/Hello'

var _mockMessage = 'mock message'

function setup() {
  const props = {
    onClick: jest.fn(),
    message: _mockMessage
  }

  const enzymeWrapper = shallow(<Hello {...props}/>)

  return {props, enzymeWrapper}
}

describe('components', () => {
  it('should render self and subcomponents', () => {
    const {enzymeWrapper} = setup()
    const newMessage = 'Hello, World!'

    expect(enzymeWrapper.find('h1').text()).toBe(_mockMessage)
  })
})