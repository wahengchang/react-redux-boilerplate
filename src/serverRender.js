import 'babel-polyfill'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import _reducers from './reducers'
import { Provider } from 'react-redux';
import HelloWorld from './containers/HelloWorld'
import JsonAPI from './containers/JsonAPI'
import {
  StaticRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'


const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const store = createStore(
    _reducers,
    composeEnhancers(applyMiddleware(thunk))
  )

function serverRender(req, res) {
  const context = {}
  const componentStr = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Switch>
            <Route exact path="/" component={HelloWorld}/>
            <Route path="/api" component={JsonAPI}/>  
          </Switch>
        </StaticRouter>
      </Provider>
  )
  res.send(renderFullPage(componentStr))
}

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Hello World</title>
      </head>
      <body>
        <div id="root">${(html)?html:''}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = serverRender
