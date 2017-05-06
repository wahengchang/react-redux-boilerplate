import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import helloReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const store = createStore(
    helloReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)