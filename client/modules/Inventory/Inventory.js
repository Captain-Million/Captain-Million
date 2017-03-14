import React from 'react';

import ListView from './components/ListView/ListView';
import DocumentContainer from './components/DocumentContainer/DocumentContainer';
import Navigation from './components/Navigation/Navigation';

import styles from './Inventory.css';

const Home = () => {
  return (
    <div className={styles.inventory}>
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Home;
