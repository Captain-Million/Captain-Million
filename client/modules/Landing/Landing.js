import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import styles from './Landing.css';

export class Landing extends Component {
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
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Landing;
