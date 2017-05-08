import helloWorld from '../../src/reducers/hello.js'

describe('helloWorld reducer', () => {
  it('should return the initial state', (done) => {
    expect(
      helloWorld([], {})
    ).toEqual([])
    done()
  })

  it('should return the HELLO_WORLD state', (done) => {
    expect(
      helloWorld({hello:""}, {
          type: 'HELLO_WORLD'
      })
    ).toEqual({ hello:'', message: 'Hello, World!' })
    done()
  })

  it('should return the SET_MESSAGE state', (done) => {

    var _message = 'I am message'

    expect(
      helloWorld({hello:""}, {
          type: 'SET_MESSAGE',
          message: _message
      })
    ).toEqual({ hello:'', message: _message })
    done()
  })
})