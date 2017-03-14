import React from 'react';

import Product from './../Product/Product';

import styles from './DocumentTable.css';

const DocumentTable = () => {
  return (
    <div className={styles.documentTable}>
      <table>
        <thead>
          <tr>
            <th className={styles.line_number}><span></span></th>
            <th className={styles.text}><span>Product name</span></th>
            <th className={styles.number}><span>Expected</span></th>
            <th className={styles.number}><span>Actual</span></th>
            <th className={styles.number}><span>Divergence</span></th>
          </tr>
        </thead>
        <tbody>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
