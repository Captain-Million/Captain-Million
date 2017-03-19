import React from 'react';

import styles from './DocumentHeader.css';

const DocumentHeader = ({ documentType = 'Document', name = '(new?)' } = {}) => {
  return (
    <div className={styles.documentHeader}>
      <span className={styles.type}>{documentType} </span>
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default DocumentHeader;
