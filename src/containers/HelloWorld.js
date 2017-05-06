import { connect } from 'react-redux'
import Hello from './../components/Hello'
import helloActionCreator from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.hello.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(helloActionCreator.helloWorld());
    }
  }
}

const hello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default hello
