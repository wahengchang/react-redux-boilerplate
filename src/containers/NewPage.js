import { connect } from 'react-redux'
import NewPage from '../components/NewPage'

const mapStateToProps = (state, ownProps) => {
  return {
    message: 'well behave !!!'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const newPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPage)

newPage.initState = (store,req,res) => {
    return (dispatch, getState) => {
      return new Promise( (resolve, reject)=> {
        resolve ()
      })
    }
}

export default newPage