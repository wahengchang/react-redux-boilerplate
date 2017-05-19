
import 'babel-polyfill'
import React from 'react'
import { render, renderToString } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import _reducers from '../reducers'

import {initState} from '../containers/HelloWorld'

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose



function serverRender(req,res) {

  const store = createStore(
      _reducers,
      composeEnhancers(applyMiddleware(thunk))
    )

  store.dispatch(initState(store,req,res))
    .then( () => res.send(renderFullPage(store.getState())) )
}

function renderFullPage(preloadedState = {}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Hello World</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          console.log('preloadedState: ',${JSON.stringify(preloadedState)})
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = serverRender
