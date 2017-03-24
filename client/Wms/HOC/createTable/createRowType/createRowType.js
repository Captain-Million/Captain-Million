import React, { PropTypes } from 'react';

import createCell from '../createCell';
import styles from './createRowType.css';

/**
 * This HOC creates a row instance with either th or td cells
 * It then populates the row with data and styling options
 * If no data is given the field input is used as a fallback and the options are ignored
 */

export default function createRowType(CellComponent) {
  const CustomRow = ({ fields, data }) => {
    const CustomTCell = createCell(CellComponent);

    const tableRowWithFields = fields.map(field =>
      <CustomTCell
        key={`${field.type} ${field.title} ${field.name}`}
        fieldType={field.type}
        fieldData={data ? data[field.name] : field.title}
        fieldOptions={data && field.options}
      />
    );

    return (
      <tr>
        {tableRowWithFields}
      </tr>
    );
  };

  CustomRow.propTypes = {
    fields: PropTypes.array.isRequired,
    data: PropTypes.object
  }

  return CustomRow;
}
