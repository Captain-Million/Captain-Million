import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';

const documentsList = [
  { name: '17.01.17 09:12', _id: '3567357' },
  { name: '17.01.17 10:12', _id: '35675367' },
  { name: '17.01.17 11:12', _id: '356735672' },
  { name: '17.01.17 12:12', _id: '54674567' },
  { name: '17.01.17 13:12', _id: '456457' },
  { name: '17.01.17 14:12', _id: '45745' },
];

const Arrival = () => {
  return (
    <div>
      <Helmet title="Arrival" />
      <ListView list={documentsList} urlPrefix="arrival" documentType="Arrival act" header="Arrival acts" />
      <DocumentContainer />
    </div>
  );
};

export default Arrival;
