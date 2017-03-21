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

import styles from './Wms.css';

export default class Wms extends Component {
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
              <Route exact path={url} component={Report} />

              <Route path={`${url}/arrival/:id`} component={Arrival} />
              <Route path={`${url}/arrival/`} component={Arrival} />

              <Route path={`${url}/dispatch/:id`} component={Dispatch} />
              <Route path={`${url}/dispatch/`} component={Dispatch} />

              <Route path={`${url}/products/:id`} component={Products} />
              <Route path={`${url}/products/`} component={Products} />

              <Route path={`${url}/inventory/:id`} component={Inventory} />
              <Route path={`${url}/inventory/`} component={Inventory} />

              <Route path={`${url}/report/`} component={Report} />
            </Switch>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}
