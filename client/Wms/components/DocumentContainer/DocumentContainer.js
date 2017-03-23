import React from 'react';

import styles from './DocumentContainer.css';

const DocumentContainer = (props) => {
  return (
    <div {...props} className={styles.documentContainer} />
  );
};

export default DocumentContainer;
