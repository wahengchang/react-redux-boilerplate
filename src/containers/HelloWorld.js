import { connect } from 'react-redux'
import Hello from './../components/Hello'
import helloActionCreator from '../actions/hello'

const mapStateToProps = (state, ownProps) => {
  console.log('helloWorld - mapStateToProps: ', state)
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
export const initState = (store,req,res) => {
console.log(' initState ----------1 ')
    return (dispatch, getState) => {
      return new Promise( (resolve, reject)=> {
        resolve (1)
      })
    }
}

