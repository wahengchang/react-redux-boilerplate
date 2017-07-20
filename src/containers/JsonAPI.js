import { connect } from 'react-redux'
import jsonAPIActionCreator from '../actions/jsonAPI'
import JsonAPI from '../components/JsonAPI'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.jsonAPI.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: () => {
      dispatch(jsonAPIActionCreator.getJsonAPI());
    }
  }
}

const jsonAPIContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonAPI)


jsonAPIContainer.initState = (store, req, res) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

export default jsonAPIContainer