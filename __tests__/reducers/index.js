import reducer from '../../src/reducers/index.js'

describe('helloWorld reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer([], {})
    ).toEqual({ helloWorld: { message: 'Hello' } })
  })

  it('should return the HELLO_WORLD state', () => {
    expect(
      reducer({helloWorld:""}, {
          type: 'HELLO_WORLD'
      })
    ).toEqual({ helloWorld: { message: 'Hello, World!' } })
  })

  it('should return the SET_MESSAGE state', () => {

    var _message = 'I am message'

    expect(
      reducer({helloWorld:""}, {
          type: 'SET_MESSAGE',
          message: _message
      })
    ).toEqual({ helloWorld: { message: _message } })
  })
})