import React from 'react';

import tableCell from '../tableCell';
import styles from './TableHeading.css';

const Th = tableCell('th');

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

export default TableHeading;
