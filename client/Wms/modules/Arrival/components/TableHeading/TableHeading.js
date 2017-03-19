import React from 'react';

import styles from './TableHeading.css';

const TableHeading = () => {
  return (
    <thead>
      <tr>
        <th className={styles.line_number}><span /></th>
        <th className={styles.text}><span>Product name</span></th>
        <th className={styles.number}><span>Quantity</span></th>
      </tr>
    </thead>
  );
};

export default TableHeading;
