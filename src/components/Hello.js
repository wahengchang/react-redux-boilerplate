import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './Hello.css'

const Hello = ({ onClick, message }) => {
  return (
    <div>
      <h1 className={classNames(style['title'])}>{ message }</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

Hello.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Hello
