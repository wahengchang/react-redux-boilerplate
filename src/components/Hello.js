import React, { PropTypes } from 'react'

const Hello = ({ onClick, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

Hello.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Hello
