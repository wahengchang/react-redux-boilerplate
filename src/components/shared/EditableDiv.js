import React, { PropTypes } from 'react'
import classNames from 'classnames'
import style from './EditableDiv.css'

class EditableDiv extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { value, onChange, onUpdate } = this.props
    const _onChange = (e) => onChange(e.target.textContent)
    const css = classNames(style['single-line'])
    const handleKeyPress = (target) => {
        (target.charCode === 13)?onUpdate():null
    }
    return (<div 
                className={css}
                contentEditable="true"
                onChange={_onChange}
                onKeyPress={handleKeyPress}
                onInput={_onChange} >
                {value}
            </div>)
  }
}

EditableDiv.propTypes = {
}

export default EditableDiv
