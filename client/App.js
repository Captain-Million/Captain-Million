import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wms from './Wms/Wms';
import Landing from './Landing/Landing';

export default function App({ store = {} } = {}) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/wms" component={Wms} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
}
