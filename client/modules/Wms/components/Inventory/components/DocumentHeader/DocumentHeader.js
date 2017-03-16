import React from 'react';

import styles from './DocumentHeader.css';

const DocumentHeader = ({ title = '(new?)' } = {}) => {
  return (
    <div className={styles.documentHeader}>
      <span className={styles.header__type}>Inventory act </span>
      <span className={styles.header__id}>{title}</span>
    </div>
  );
};

export default DocumentHeader;
