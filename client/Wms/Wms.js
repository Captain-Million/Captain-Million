import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import DevTools from './components/ReactDevTools/ReactDevTools';
import Navigation from './components/Navigation/Navigation';

import Arrival from './modules/Arrival/Arrival';
import Dispatch from './modules/Dispatch/Dispatch';
import Products from './modules/Products/Products';
import Inventory from './modules/Inventory/Inventory';
import Report from './modules/Report/Report';

import createRelayRootContainer from './create-relay-root-container';

import styles from './Wms.css';

const [
  ReportRootContainer,
  ArrivalRootContainer,
  DispatchRootContainer,
  InventoryRootContainer,
  ProductsRootContainer,
] = [Report, Arrival, Dispatch, Inventory, Products].map(createRelayRootContainer);

class Wms extends Component {
  static propTypes = {
    match: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  render() {
    const url = this.props.match.url;

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Default"
            titleTemplate="%s - WMS proj."
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <div className={styles.wms}>
            <Switch>
              <Route exact path={url} component={ReportRootContainer} />

              <Route path={`${url}/arrival/:id`} component={ArrivalRootContainer} />
              <Route path={`${url}/arrival/`} component={ArrivalRootContainer} />

              <Route path={`${url}/dispatch/:id`} component={DispatchRootContainer} />
              <Route path={`${url}/dispatch/`} component={DispatchRootContainer} />

              <Route path={`${url}/products/:id`} component={ProductsRootContainer} />
              <Route path={`${url}/products/`} component={ProductsRootContainer} />

              <Route path={`${url}/inventory/:id`} component={InventoryRootContainer} />
              <Route path={`${url}/inventory/`} component={InventoryRootContainer} />

              <Route path={`${url}/report/`} component={ReportRootContainer} />
            </Switch>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default Wms;

