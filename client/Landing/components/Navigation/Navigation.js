import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Navigation.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div>
        <NavLink to="/landing/features" className={styles.navLink} activeClassName={styles.navLinkActive}>Features</NavLink>
        <NavLink to="/landing/support" className={styles.navLink} activeClassName={styles.navLinkActive}>Support</NavLink>
        <NavLink to="/landing/login" className={styles.navLink} activeClassName={styles.navLinkActive}>Login</NavLink>
        <NavLink to="/landing/register" className={styles.navLink} activeClassName={styles.navLinkActive}>Register</NavLink>
        <Link to="/wms" className={styles.navButton}>open WMS</Link>
      </div>
    </div>
  );
};

export default Navigation;
