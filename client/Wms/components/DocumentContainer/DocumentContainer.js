import React from 'react';

import styles from './DocumentContainer.css';

const DocumentContainer = ({ children = [] } = {}) => {
  return (
    <div className={styles.documentContainer}>
      {children}
    </div>
  );
};

export default DocumentContainer;
