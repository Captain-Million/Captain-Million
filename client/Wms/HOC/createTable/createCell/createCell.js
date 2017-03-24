import React, { PropTypes } from 'react';
import cn from 'classnames';

import styles from './createCell.css';

const createCell = (TableCell) => ({ fieldType, fieldData, fieldOptions }) => {
  const className = cn(styles[fieldType], styles[fieldOptions])
  const data = fieldData !== null ? fieldData: '';

  TableCell.propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  return (<TableCell className={className}>{data}</TableCell>);
};

export default createCell;
