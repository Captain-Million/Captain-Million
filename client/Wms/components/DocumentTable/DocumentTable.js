import React from 'react';

import Product from './../../modules/Inventory/components/Product/Product';
import DocumentTableHeading from './../../modules/Inventory/components/DocumentTableHeading/DocumentTableHeading';

import styles from './DocumentTable.css';

const DocumentTable = ({ products = [] } = {}) => {
  const productsList = products.map((item, index) => {
    const getExpectedQuantity = Math.floor(Math.random() * 2);
    const lineNumber = index + 1;
    return (
      <Product lineNumber={lineNumber} expected={getExpectedQuantity} name={item.name} actual={item.quantity} key={item._id} />
    );
  });
  return (
    <div className={styles.documentTable}>
      <table>
        <DocumentTableHeading />
        <tbody>
          {productsList}
        </tbody>
      </table>

    </div>
  );
};

export default DocumentTable;
