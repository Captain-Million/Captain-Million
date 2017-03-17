/* eslint-disable global-require */
import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import Wms from './Wms/Wms';
import Inventory from './Wms/modules/Inventory/Inventory';

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
      <IndexRoute component={Inventory} />
      <Route path="/wms/arrival" component={Inventory} />
      <Route path="/wms/dispatch" component={Inventory} />
      <Route path="/wms/products" component={Inventory} />
      <Route path="/wms/inventory" component={Inventory} />
      <Route path="/wms/report" component={Inventory} />
      <Route path="/wms/*" component={Inventory} />
    </Route>
    <Route path="/" component={Landing}>
      <IndexRoute component={Home} />
      <Route path="some-specific-landing-path" component={Home} />
      <Route path="*" component={Home} />
    </Route>
  </Route>
);
