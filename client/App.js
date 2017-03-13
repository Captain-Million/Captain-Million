/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');
require('./components/reset.css');
require('./components/document__controls.css');
require('./components/document__header.css');
require('./components/list_view.css');
require('./components/document_view.css');
require('./components/subsystems_view.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
