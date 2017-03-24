import React, { Component } from 'react';
import Relay from 'react-relay';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import DevTools from './components/ReactDevTools/ReactDevTools';
import Navigation from './components/Navigation/Navigation';

import Arrival from './modules/Arrival/Arrival';
import Dispatch from './modules/Dispatch/Dispatch';
import Products from './modules/Products/Products';
import Inventory from './modules/Inventory/Inventory';
import Report from './modules/Report/Report';

import styles from './Wms.css';

const inventoriesRoute = {
  queries: {
    inventories: () => Relay.QL`
      query { getMyInventories }
    `,
  },
  params: {},
  name: 'InventoriesRoute',
};

class ReportRootContainer extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={Report}
        route={inventoriesRoute}
      />
    );
  }
};

class ArrivalRootContainer extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={Arrival}
        route={inventoriesRoute}
        renderFetched={data => <Arrival {...this.props} {...data} />}
      />
    );
  }
};




class Wms extends Component {
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

              <Route path={`${url}/dispatch/:id`} component={Dispatch} />
              <Route path={`${url}/dispatch/`} component={Dispatch} />

              <Route path={`${url}/products/:id`} component={Products} />
              <Route path={`${url}/products/`} component={Products} />

              <Route path={`${url}/inventory/:id`} component={Inventory} />
              <Route path={`${url}/inventory/`} component={Inventory} />

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

