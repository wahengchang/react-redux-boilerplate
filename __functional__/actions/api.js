import apis from '../../src/actions/api.js'

describe('api action creator', () => {
  it('get github user', (done) => {
    apis.getGithubUser('waheng').then(
        (res) => {
          console.log(res)
            expect(res.login).toEqual('waheng');
            done();
        },
        (err) => done(err)
    )
  })
})