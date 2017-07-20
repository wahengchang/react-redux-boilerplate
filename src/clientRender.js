import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  createStore,
  compose,
  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import _reducers from './reducers'
import matchConfig from './matchConfig'
import {
  StaticRouter,
  Route,
  Switch
} from 'react-router-dom'

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
typeof window !==
'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose

const initState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
  _reducers,
  initState,
  composeEnhancers(applyMiddleware(thunk)),
)

render(
  <Provider store={store}>
    <StaticRouter location={window.location.pathname} context={{}}>
      <Switch>
        {
          matchConfig.map((route, index) => <Route key={`route${index}`} {...route} />)
        }
      </Switch>
    </StaticRouter>
  </Provider>,
  document.getElementById('root')
)