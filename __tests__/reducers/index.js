import reducer from '../../src/reducers/index.js'

describe('helloWorld reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer([], {})
    ).toEqual({ hello: { message: 'Hello' } })
  })

  it('should return the HELLO_WORLD state', () => {
    expect(
      reducer({hello:""}, {
          type: 'HELLO_WORLD'
      })
    ).toEqual({ hello: { message: 'Hello, World!' } })
  })

  it('should return the SET_MESSAGE state', () => {

    var _message = 'I am message'

    expect(
      reducer({hello:""}, {
          type: 'SET_MESSAGE',
          message: _message
      })
    ).toEqual({ hello: { message: _message } })
  })
})