import React from 'react'
import PropTypes from 'prop-types'

class JsonAPI extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const { products } = this.props
    const _renderli = products.map((item, index) => {
      return (
        <div key={index}>
          <h2>{item.id}
            <small> {item.title}</small>
          </h2>
          <p>{item.body}</p>
        </div>
      )
    })

    return (
      <div>
        <h1> Response </h1>
        <a href="https://jsonplaceholder.typicode.com/posts"> https://jsonplaceholder.typicode.com/posts </a>
        <div>
          {_renderli}
        </div>
      </div>
    )
  }
}

JsonAPI.propTypes = {
  fetchData: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default JsonAPI
