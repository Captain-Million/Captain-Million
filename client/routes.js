/* eslint-disable global-require */
import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import Wms from './Wms/Wms';
import Arrival from './Wms/modules/Arrival/Arrival';
import Dispatch from './Wms/modules/Dispatch/Dispatch';
import Products from './Wms/modules/Products/Products';
import Inventory from './Wms/modules/Inventory/Inventory';
import Report from './Wms/modules/Report/Report';

import Landing from './Landing/Landing';
import Home from './Landing/modules/Home/Home';

class Wrapper extends Component {
  render() {
    return this.props.children;
  }
}
Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default (
  <Route component={Wrapper}>
    <Route path="/wms" component={Wms}>
      <IndexRoute component={Report} />
      <Route path="/wms/arrival" component={Arrival} />
      <Route path="/wms/dispatch" component={Dispatch} />
      <Route path="/wms/products" component={Products} />
      <Route path="/wms/inventory" component={Inventory} />
      <Route path="/wms/report" component={Report} />
      <Route path="/wms/*" component={Report} />
    </Route>
    <Route path="/" component={Landing}>
      <IndexRoute component={Home} />
      <Route path="some-specific-landing-path" component={Home} />
      <Route path="*" component={Home} />
    </Route>
  </Route>
);
