import React, { PropTypes } from 'react';

import createCell from '../createCell';
import styles from './TableRow.css';

const Td = createCell(
  (props) => (<td {...props}/>)
);

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

TableRow.propTypes = {
  fields: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
}

export default TableRow;
