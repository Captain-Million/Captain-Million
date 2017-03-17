import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import DevTools from './components/ReactDevTools/ReactDevTools';

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
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Wms.propTypes = {
  children: PropTypes.element.isRequired,
};
