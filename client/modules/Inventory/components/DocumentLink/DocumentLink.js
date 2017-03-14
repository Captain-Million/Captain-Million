import React from 'react';
import cn from 'classnames';

import styles from './Product.css';

const Product = () => {
  return (
    <tr className={styles.product}>
      <td className={styles.line_number}><span>1</span></td>
      <td className={styles.text}><span>HP ProBook</span></td>
      <td className={styles.number}><span>1</span></td>
      <td className={styles.number}><span>1</span></td>
      <td className={cn(styles.number, styles.results)}><span></span></td>
    </tr>
  );
};

export default Product;
