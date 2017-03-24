import React from 'react';
import cn from 'classnames';

import styles from './tableCell.css';

const tableCell = (type) => ({ fieldType, fieldText, fieldOptions }) => {
  const className = cn(styles[fieldType], styles[fieldOptions])

  const text = fieldText !== null ? fieldText: '';

  const cell = type === 'th'
    ? <th className={className}>{text}</th>
    : <td className={className}>{text}</td>

  return cell;
};

export default tableCell;
