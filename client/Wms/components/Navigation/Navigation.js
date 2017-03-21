import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/wms/arrival" activeClassName={styles.active} exact={false}><span>Arrival</span></NavLink>
        </li>
        <li>
          <NavLink to="/wms/dispatch"><span>Dispatch</span></NavLink>
        </li>
        <li>
          <NavLink to="/wms/products"><span>Products</span></NavLink>
        </li>
        <li>
          <NavLink to="/wms/inventory"><span>Inventory</span></NavLink>
        </li>
        <li>
          <NavLink to="/wms/report"><span>Report</span></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
