import React, { PropTypes } from 'react';

import styles from './DocumentHeader.css';

const DocumentHeader = ({ itemType, name }) => {
  return (
    <div className={styles.documentHeader}>
      {(itemType) && (<span className={styles.type}>{itemType}</span>)}
      {(name) && (<span className={styles.name}> {name}</span>)}
    </div>
  );
};

DocumentHeader.propTypes = {
  itemType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DocumentHeader;
