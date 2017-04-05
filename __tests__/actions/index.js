import * as actions from '../../actions/index.js'

describe('actions', () => {
  it('should create an action for HelloWorld', () => {

    const expectedAction = {
      type: 'HELLO_WORLD'
    }

    expect(actions.helloWorld()).toEqual(expectedAction)
    
  })
})