import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';
import Home from './modules/Home/Home';

import styles from './Landing.css';

export default class Landing extends Component {
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
        <div>
          <Helmet
            title="Default"
            titleTemplate="%s - WMS proj. Landing"
          />
          <div className={styles.container}>
            <Route component={Home} />
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  children: PropTypes.element.isRequired,
};
