import React from 'react';

import TableRow from './../TableRow/TableRow';
import TableHeading from './../TableHeading/TableHeading';

import styles from './Table.css';

const Table = ({ products = [] } = {}) => {
  const productsList = products.map((item, index) => {
    const getExpectedQuantity = Math.floor(Math.random() * 2);
    const lineNumber = index + 1;
    return (
      <TableRow lineNumber={lineNumber} expected={getExpectedQuantity} name={item.name} actual={item.quantity} key={item._id} />
    );
  });
  return (
    <div className={styles.documentTable}>
      <table>
        <TableHeading />
        <tbody>
          {productsList}
        </tbody>
      </table>

    </div>
  );
};

export default Table;
