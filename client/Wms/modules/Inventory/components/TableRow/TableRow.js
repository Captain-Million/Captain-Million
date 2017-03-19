import React from 'react';
import cn from 'classnames';

import styles from './TableRow.css';

const TableRow = ({ lineNumber = '', name = '', expected = 0, actual = 0, divergence } = {}) => {
  const divergenceDisplay = divergence || (actual - expected) || '';
  return (
    <tr className={styles.product}>
      <td className={styles.line_number}><span>{lineNumber}</span></td>
      <td className={styles.text}><span>{name}</span></td>
      <td className={styles.number}><span>{expected}</span></td>
      <td className={styles.number}><span>{actual}</span></td>
      <td className={cn(styles.number, styles.results)}><span>{divergenceDisplay}</span></td>
    </tr>
  );
};

export default TableRow;
