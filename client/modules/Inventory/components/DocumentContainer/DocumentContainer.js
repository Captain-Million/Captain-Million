import React from 'react';

import DocumentHeader from './../DocumentHeader/DocumentHeader';
import DocumentControls from './../DocumentControls/DocumentControls';
import DocumentTable from './../DocumentTable/DocumentTable';

import styles from './DocumentContainer.css';

const DocumentContainer = () => {
  return (
    <div className={styles.documentContainer}>
      <DocumentHeader />
      <DocumentTable />
      <DocumentControls />
    </div>
  );
};

export default DocumentContainer;
