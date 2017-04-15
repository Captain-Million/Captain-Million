import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Link to="/product/" className={styles.navLink}>Product</Link>
        <Link to="/product/support" className={styles.navLink}>Support</Link>
        <Link to="/wms" className={styles.navButton}>Start using</Link>
      </div>
    </div>
  );
};

export default Navigation;
