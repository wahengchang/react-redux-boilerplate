import apis from '../../src/actions/api.js'

describe('api action creator', () => {
  it('get github user', (done) => {
    apis.getJsonAPI().then(
        (res) => {
            expect(res[0].title).toMatch('');
            done();
        },
        (err) => done(err)
    )
  })
})