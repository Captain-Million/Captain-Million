import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../CommonComponents/ListView/ListView';
import DocumentContainer from './components/DocumentContainer/DocumentContainer';
import Navigation from './../CommonComponents/Navigation/Navigation';

import styles from './Inventory.css';

const Inventory = () => {
  return (
    <div className={styles.inventory}>
      <Helmet title="Inventory" />
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Inventory;
