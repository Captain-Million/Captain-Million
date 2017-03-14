import React from 'react';

import styles from './Navigation.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <a href="#"><img src="../img/a.png" role="presentation" /><span>Arrival</span></a>
        </li>
        <li>
          <a href="#"><img src="../img/d.png" role="presentation" /><span>Dispatch</span></a>
        </li>
        <li>
          <a href="#"><img src="../img/p.png" role="presentation" /><span>Products</span></a>
        </li>
        <li>
          <a href="#" className="current"><img src="../img/i.png" role="presentation" /><span>Inventory</span></a>
        </li>
        <li>
          <a href="#"><img src="../img/r.png" role="presentation" /><span>Report</span></a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
