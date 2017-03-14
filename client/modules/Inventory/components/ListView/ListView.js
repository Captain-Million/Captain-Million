import React from 'react';

import styles from './ListView.css';

const ListView = () => {
  return (
    <div className={styles.listView}>
      <span className={styles.listHeader}>Inventory acts</span>
      <ul>
        <li>Inventory act 17.01.17 09:12</li>
        <li className={styles.selected}>Inventory act 17.01.17 10:12</li>
        <li>Inventory act 17.01.17 11:12</li>
        <li>Inventory act 17.01.17 12:12</li>
        <li>Inventory act 17.01.17 13:12</li>
      </ul>
    </div>
  );
};

export default ListView;
