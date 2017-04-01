import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './Home.css';

import logo from './images/ipad.png';

const Home = () => {
  return (
    <div className={styles.home} >
      <Helmet title="Home" />
      <div className={styles.nav}>
        <div className={styles.section}>
          <ul>
            <li>Product</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>Sign In</li>
            <li className={styles.navButton}><Link to="/wms">Start using WMS</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.section}>
          <div className={styles.heroDescription}>
            <h1 className={styles.appName}><span className={styles.appNameThin}>Captain</span> Million</h1>
            <p>Keep things in order.</p>
            <p>Know your business.</p>
            <p>Keep it simple.</p>
          </div>
          <div className={styles.heroImg}>
            <img src={logo} alt="WMS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
