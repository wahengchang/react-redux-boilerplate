import { connect } from 'react-redux'
import { HELLO_WORLD } from '../config/actionType'
import Hello from './../components/Hello'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.hello.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: HELLO_WORLD })
    }
  }
}

const hello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default hello
