import React from 'react';

import tableCell from '../tableCell';
import styles from './TableRow.css';

const Td = tableCell('td');

const TableRow = ({ fields, data }) => {
  const tableRowWithFields = fields.map((field, i) =>
    <Td
      key={`${field.type} ${field.title} ${field.name}`}
      fieldType={field.type}
      fieldText={data[field.name]}
      fieldOptions={field.options}
    />
  );

  return (
    <tr className={styles.product}>
      {tableRowWithFields}
    </tr>
  );
};

export default TableRow;
