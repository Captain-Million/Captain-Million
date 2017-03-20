import React from 'react';

import TableRow from './../TableRow/TableRow';
import TableHeading from './../TableHeading/TableHeading';

import styles from './Table.css';

const Table = ({ products = [] } = {}) => {
  const productsList = products.map((item, index) => {
    const lineNumber = index + 1;
    return (
      <TableRow lineNumber={lineNumber} name={item.name} quantity={item.quantity} key={item._id} />
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
