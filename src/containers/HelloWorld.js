import { connect } from 'react-redux'
import Hello from './../components/Hello'
import helloActionCreator from '../actions/hello'
import globalStyle from '../styles/global.css'

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

hello.initState = (store, req, res) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}


export default hello