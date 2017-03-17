import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

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
          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  children: PropTypes.element.isRequired,
};
