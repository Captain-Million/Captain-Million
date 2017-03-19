import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import DocumentHeader from './../../components/DocumentHeader/DocumentHeader';
import DocumentControls from './../../components/DocumentControls/DocumentControls';
import Table from './components/Table/Table';

const demoData = require('./../../../../__demo-data/demo-data');

const documentsList = demoData.documents.filter(item => item.act === 'arrival');

const documentsListView = documentsList.map((item) => {
  const { _id, lastEdit: { date } } = item;
  return ({ _id, date });
});

const currentDocumentName = '17.11.17 10:12';

const Arrival = () => {
  const documentType = 'Arrival act';
  return (
    <div>
      <Helmet title="Arrival acts" />
      <ListView list={documentsListView} urlPrefix="arrival" documentType={documentType} header="Arrival acts" />
      <DocumentContainer>
        <DocumentHeader documentType={documentType} name={currentDocumentName} />
        <Table products={documentsList[0].content} />
        <DocumentControls eventhandlers="some_event_handlers" />
      </DocumentContainer>
    </div>
  );
};

export default Arrival;
