import fetch from 'isomorphic-fetch'

const actionCreator = {
  getGithubUser: (_username) => {
    return (
      fetch(`https://api.github.com/users/${_username}`)
        .then(response => response.json())
    )
  }
}

export default actionCreator
