import React from 'react';

import styles from './DocumentHeader.css';

const DocumentHeader = () => {
  return (
    <div className={styles.documentHeader}>
      <span className={styles.header__type}>Inventory act</span>
      <span className={styles.header__id}> 17.11.17 10:12</span>
    </div>
  );
};

export default DocumentHeader;
