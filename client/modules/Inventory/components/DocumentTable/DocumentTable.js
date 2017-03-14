import React from 'react';

import styles from './DocumentTable.css';

import Product from './../Product/Product';

const DocumentTable = ({ products = [] } = {}) => {
  const productsList = products.map((item, index) => {
    const getExpectedQuentity = Math.floor(Math.random() * 2);
    const lineNumber = index + 1;
    return (
      <tbody>
        <Product lineNumber={lineNumber} expected={getExpectedQuentity} name={item.name} actual={item.quantity} />
      </tbody>
    );
  });
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
        {productsList}
      </table>

    </div>
  );
};

export default DocumentTable;
