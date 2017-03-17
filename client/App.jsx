/**
 * Root Component
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={browserHistory} key={Math.random()}>
        {routes}
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
