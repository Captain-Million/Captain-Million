import React from 'react';
import cn from 'classnames';

import styles from './DocumentControls.css';

const DocumentControls = () => {
  return (
    <div className={styles.documentControls}>
      <a href="/wms/#1" className={cn(styles.button, styles.button_default)}>Save</a>
      <a href="/wms/#1" className={styles.button}>Cancel</a>
    </div>
  );
};

export default DocumentControls;
