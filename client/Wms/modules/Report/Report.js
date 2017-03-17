import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

import styles from './Report.css';

const Report = () => {
  return (
    <div className={styles.report}>
      <Helmet title="Report" />
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Report;
