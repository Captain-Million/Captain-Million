/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/App/App';
import Inventory from './modules/Inventory/Inventory';
import LandingPage from './modules/LandingPage/LandingPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/wms" component={Inventory}>
      <Route path="/wms/inventory" component={Inventory} />
    </Route>
    <Route path="*" component={LandingPage} />
  </Route>
);
