import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App'
import HelloWorld from './containers/HelloWorld'
import JsonAPI from './containers/JsonAPI'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HelloWorld} />
      <Route path="/app" component={App} />
      <Route path="/api" component={JsonAPI} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;