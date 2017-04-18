import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import ProductFeatures from './modules/ProductFeatures/ProductFeatures';
import Support from './modules/Support/Support';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import styles from './Landing.css';
import favicon16x16 from './../icons/favicon-16x16.png';
import favicon32x32 from './../icons/favicon-32x32.png';
import appleTouchIcon from './../icons/apple-touch-icon.png';

export default class Landing extends Component {
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
        <Helmet titleTemplate="%s - Captain Million">
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
          <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <div className={styles.container}>
          <Switch>
            <Route exact path={url} component={ProductFeatures} />
            <Route path={`${url}/features`} component={ProductFeatures} />
            <Route path={`${url}/support`} component={Support} />
            <Route path={`${url}/login`} component={Login} />
            <Route path={`${url}/register`} component={Register} />
          </Switch>
        </div>
      </div>
    );
  }
}
