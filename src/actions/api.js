import fetch from 'isomorphic-fetch'

const actionCreator = {
  getJsonAPI: (_username) => {
    return (
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
    )
  }
}

export default actionCreator
