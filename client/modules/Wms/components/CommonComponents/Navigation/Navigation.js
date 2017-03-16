import React from 'react';
import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link to="/wms/arrival"><img src="../img/a.png" role="presentation" /><span>Arrival</span></Link>
        </li>
        <li>
          <Link to="/wms/dispatch"><img src="../img/d.png" role="presentation" /><span>Dispatch</span></Link>
        </li>
        <li>
          <Link to="/wms/products"><img src="../img/p.png" role="presentation" /><span>Products</span></Link>
        </li>
        <li>
          <Link to="/wms/inventory" className="current"><img src="../img/i.png" role="presentation" /><span>Inventory</span></Link>
        </li>
        <li>
          <Link to="/wms/report"><img src="../img/r.png" role="presentation" /><span>Report</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
