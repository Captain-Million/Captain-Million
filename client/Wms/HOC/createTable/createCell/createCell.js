import React, { PropTypes } from 'react';
import cn from 'classnames';

import styles from './createCell.css';

const createCell = (TableCell) => {
  function Cell({ fieldType, fieldData, fieldOptions }) {
    const className = cn(styles[fieldType], styles[fieldOptions]);
    const data = fieldData !== null ? fieldData : '';

    return (<TableCell className={className}>{data}</TableCell>);
  }

  Cell.propTypes = {
    fieldType: PropTypes.string.isRequired,
    fieldData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fieldOptions: PropTypes.string,
  };

  Cell.defaultProps = {
    fieldData: undefined,
    fieldOptions: undefined,
  };

  return Cell;
};

export default createCell;

