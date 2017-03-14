/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/App/App';
import Inventory from './modules/Inventory/Inventory';
import Navigation from './modules/Inventory/components/Navigation/Navigation';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Inventory} />
    <Route path="/nav" component={Navigation} />
  </Route>
);
