import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.css';

const Navigation = () => {

  return (
    <div className={styles.nav}>
      <div>
        <a href="http://captain-million.herokuapp.com/" className={styles.navLink}>Product</a>
        <a href="http://captain-million.herokuapp.com/" className={styles.navLink}>Pricing</a>
        <a href="http://captain-million.herokuapp.com/" className={styles.navLink}>Support</a>
        <a href="http://captain-million.herokuapp.com/" className={styles.navLink}>Sign In</a>
        <Link to="/wms" className={styles.navButton}>Start using Captain Million</Link>
      </div>
    </div>
  );
};

export default Navigation;
