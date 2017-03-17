import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const documentsList = [
  { name: '17.01.17 09:12', _id: 'aaaaa' },
  { name: '17.01.17 10:12', _id: 'ssss' },
  { name: '17.01.17 11:12', _id: 'ddd' },
  { name: '17.01.17 12:12', _id: 'ffffff' },
  { name: '17.01.17 13:12', _id: 'gggg' },
  { name: '17.01.17 14:12', _id: 'hhhh' },
];

const Inventory = () => {
  return (
    <div>
      <Helmet title="Inventory" />
      <ListView list={documentsList} urlPrefix="inventory" documentType="Inventory act" header="Inventory acts" />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Inventory;
