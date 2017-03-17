import React from 'react';
import { Link } from 'react-router';

import styles from './ListView.css';

const ListView = () => {
  return (
    <div className={styles.listView}>
      <span className={styles.listHeader}>Inventory acts</span>
      <ul>
        <li><Link to="/wms/inventory/h3j45hb3k4">Inventory act 17.01.17 09:12</Link></li>
        <li><Link to="/wms/inventory/h567h6" className={styles.selected}>Inventory act 17.01.17 10:12</Link></li>
        <li><Link to="/wms/inventory/yukg757">Inventory act 17.01.17 11:12</Link></li>
        <li><Link to="/wms/inventory/456g45645">Inventory act 17.01.17 12:12</Link></li>
        <li><Link to="/wms/inventory/78678h567">Inventory act 17.01.17 13:12</Link></li>
      </ul>
    </div>
  );
};

export default ListView;
