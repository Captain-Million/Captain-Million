import React from 'react';

import TableRow from './TableRow';
import TableHeading from './TableHeading';
import styles from './createTable.css';

const createTable = (fields) => ({ products }) => {
  const productsList = products.map((item, index) => {
    const data = { ...item, lineNumber: index + 1 }
    return (
      <TableRow key={item._id} fields={fields} data={data}/>
    );
  });

  return (
    <div className={styles.documentTable}>
      <table>
        <TableHeading fields={fields}/>
        <tbody>
          {productsList}
        </tbody>
      </table>

    </div>
  );
};

export default createTable;
