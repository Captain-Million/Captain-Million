import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import DevTools from './components/ReactDevTools/ReactDevTools';
import Navigation from './components/Navigation/Navigation';

import Arrival from './modules/Arrival/Arrival';
import Inventory from './modules/Inventory/Inventory';

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
              <Route exact path={url} component={Arrival} />
              <Route path={`${url}/arrival/:id`} component={Arrival} />
              <Route path={`${url}/inventory`} component={Inventory} />
              <Route component={Arrival} />
            </Switch>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

Wms.propTypes = {
  children: PropTypes.element.isRequired,
};
