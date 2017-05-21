import React from 'react';
import PropTypes from 'prop-types';

import createCell from '../createCell';
// import styles from './createRowType.css';
import './createRowType.css';

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
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  };

  CustomRow.defaultProps = {
    data: undefined,
  };

  return CustomRow;
}
