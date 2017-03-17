import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const documentsList = [
  { name: '17.01.17 09:12', _id: 'oiuyuoi' },
  { name: '17.01.17 12:12', _id: '7676767' },
  { name: '17.01.17 13:12', _id: '1fgh' },
  { name: '17.01.17 14:12', _id: '546fgh' },
];

const Dispatch = () => {
  return (
    <div>
      <Helmet title="Dispatch" />
      <ListView list={documentsList} urlPrefix="dispatch" documentType="Dispatch act" header="Dispatch acts" />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Dispatch;
