import React from 'react';

import styles from './DocumentTableHeading.css';

const DocumentTableHeading = () => {
  return (
    <thead>
      <tr>
        <th className={styles.line_number}><span></span></th>
        <th className={styles.text}><span>Product name</span></th>
        <th className={styles.number}><span>Expected</span></th>
        <th className={styles.number}><span>Actual</span></th>
        <th className={styles.number}><span>Divergence</span></th>
      </tr>
    </thead>
  );
};

export default DocumentTableHeading;
