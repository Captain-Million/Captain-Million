import React from 'react';

import DocumentHeader from './../DocumentHeader/DocumentHeader';
import DocumentControls from './../DocumentControls/DocumentControls';
import DocumentTable from './../DocumentTable/DocumentTable';

import styles from './DocumentContainer.css';

const documentTitle = '17.11.17 10:12 custom';
const products = [
  { _id: '58c7998258fdc1b748b8d3f8', quantity: 0, name: 'HP ProBook' },
  { _id: '58c799d15cc654cbdb854723', quantity: 7, name: 'Apple Macbook' },
  { _id: '58c799df7ffd9e658b2860bc', quantity: 0, name: 'Asus Gaming Laptop' },
  { _id: '58c799f309261c89abf7b25a', quantity: 0, name: 'HTC Hero' },
  { _id: '58c799f8ff9f1607173e99d6', quantity: 10, name: 'Samsung Galaxy' },
  { _id: '58c799fd1a62a48f03fe29d0', quantity: 0, name: 'Apple iPhone' },
  { _id: '58c79a02468ee42d78210dd5', quantity: 0, name: 'Sony Xperia' },
  { _id: '58c79a078c690e82dbc7140c', quantity: 0, name: 'JavaScript book' },
  { _id: '58c79a0b49eb53127025c339', quantity: 1, name: 'Design Patterns book' },
  { _id: '58c79a11bc9e99840881e328', quantity: 9, name: 'Scala book' },
  { _id: '58c79a168082e0f90168502f', quantity: 0, name: 'Clean Code book' },
];

const DocumentContainer = () => {
  return (
    <div className={styles.documentContainer}>
      <DocumentHeader title={documentTitle} />
      <DocumentTable products={products} />
      <DocumentControls />
    </div>
  );
};

export default DocumentContainer;
