import React from 'react';
import PropTypes from 'prop-types';

import createRowType from './createRowType';
import styles from './createTable.css';

export const Th = props => (<th {...props} />);
const TableHeading = createRowType(Th);

export const Td = props => (<td {...props} />);
const TableRow = createRowType(Td);

export default function createTable(fields) {
  const Table = ({ products }) => {
    const productsList = products.map((item, index) => {
      const data = { ...item, lineNumber: index + 1 };
      return (
        <TableRow key={item._id} fields={fields} data={data} />
      );
    });

    return (
      <table className={styles.documentTable}>
        <thead>
          <TableHeading fields={fields} />
        </thead>
        <tbody>
          {productsList}
        </tbody>
      </table>
    );
  };

  Table.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return Table;
}
