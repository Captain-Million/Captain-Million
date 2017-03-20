import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/wms/arrival" activeClassName={styles.active} exact={false}><img src="../img/a.png" alt="" /><span>Arrival</span></NavLink>
        </li>
        <li>
          <NavLink to="/wms/dispatch"><img src="../img/d.png" alt="" /><span>Dispatch</span></NavLink>
        </li>
        {/* <li>
          <NavLink to="/wms/products"><img src="../img/p.png" alt="" /><span>Products</span></NavLink>
        </li>*/}
        <li>
          <NavLink to="/wms/inventory"><img src="../img/i.png" alt="" /><span>Inventory</span></NavLink>
        </li>
        <li>
          <NavLink to="/wms/report"><img src="../img/r.png" alt="" /><span>Report</span></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
