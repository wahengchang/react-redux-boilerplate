import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Root from './root'
import _reducers from './reducers'

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const initState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
    _reducers,
    initState,
    composeEnhancers(applyMiddleware(thunk)),
  )

render(
  <Root store={store} />,
  document.getElementById('root')
)