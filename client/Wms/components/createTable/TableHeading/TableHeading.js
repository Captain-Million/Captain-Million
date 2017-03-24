import React, { PropTypes } from 'react';

import createCell from '../createCell';
import styles from './TableHeading.css';

const Th = createCell(
  (props) => (<th {...props}/>)
);

const TableHeading = ({ fields }) => {
  const tableHeaders = fields.map((field, i) =>
    <Th
      key={`${field.type} ${field.title} ${field.name}`}
      fieldType={field.type}
      fieldText={field.title}
    />
  );

  return (
    <thead>
      <tr>
        {tableHeaders}
      </tr>
    </thead>
  );
};

TableHeading.propTypes = {
  fields: PropTypes.array.isRequired,
}

export default TableHeading;
