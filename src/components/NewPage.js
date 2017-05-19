import React, { PropTypes } from 'react'

const NewPage = ({ onClick, message }) => {
  return (
    <div>
      <h1>NewPage: { message }</h1>
    </div>
  )
}

NewPage.propTypes = {
  message: PropTypes.string.isRequired
}

export default NewPage
