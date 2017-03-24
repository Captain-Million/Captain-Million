import React, { PropTypes } from 'react';
import cn from 'classnames';

import styles from './tableCell.css';

const createCell = (TableCell) => ({ fieldType, fieldText, fieldOptions }) => {
  const className = cn(styles[fieldType], styles[fieldOptions])
  const text = fieldText !== null ? fieldText: '';

  TableCell.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  return (<TableCell className={className}>{text}</TableCell>);
};

export default createCell;
