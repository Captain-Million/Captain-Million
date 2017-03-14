import React from 'react';

import Product from './../Product/Product';
import DocumentTableHeading from './../DocumentTableHeading/DocumentTableHeading';

import styles from './DocumentTable.css';

const DocumentTable = ({ products = [] } = {}) => {
  const productsList = products.map((item, index) => {
    const getExpectedQuentity = Math.floor(Math.random() * 2);
    const lineNumber = index + 1;
    return (
      <Product lineNumber={lineNumber} expected={getExpectedQuentity} name={item.name} actual={item.quantity} />
    );
  });
  return (
    <div className={styles.documentTable}>
      <table>
        <DocumentTableHeading />
        <tbody>
          {productsList}
          {productsList}
          {productsList}
          {productsList}
        </tbody>
      </table>

    </div>
  );
};

export default DocumentTable;
