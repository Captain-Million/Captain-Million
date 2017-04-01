import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import styles from './Landing.css';
import favicon16x16 from './../icons/favicon-16x16.png';
import favicon32x32 from './../icons/favicon-32x32.png';
import appleTouchIcon from './../icons/apple-touch-icon.png';

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
          <Helmet titleTemplate="%s - Captain Million">
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
            <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
            <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
            <meta name="theme-color" content="#000000" />
          </Helmet>
          <div className={styles.container}>
            <Route component={Home} />
          </div>
        </div>
      </div>
    );
  }
}
