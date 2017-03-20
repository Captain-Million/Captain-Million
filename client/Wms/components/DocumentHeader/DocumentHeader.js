import React from 'react';

import formatDate from './../../../util/formatDate';

import styles from './DocumentHeader.css';

const DocumentHeader = ({ documentType = 'Document', date = new Date() } = {}) => {
  return (
    <div className={styles.documentHeader}>
      <span className={styles.type}>{documentType} </span>
      <span className={styles.name}>{formatDate(date)}</span>
    </div>
  );
};

export default DocumentHeader;
