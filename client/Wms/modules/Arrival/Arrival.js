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

const Arrival = ({ match }) => {
  const documentType = 'Arrival act';

  const documentId = match.url.replace(/^\/wms\/arrival\//, '');
  let currentDocument = documentsList.filter(x => x._id === documentId)[0];
  currentDocument = currentDocument || documentsList[0];
  return (
    <div>
      <Helmet title="Arrival acts" />
      <ListView list={documentsListView} urlPrefix="arrival" documentType={documentType} header="Arrival acts" />
      <DocumentContainer>
        <DocumentHeader documentType={documentType} name={currentDocument._id} />
        <Table products={currentDocument.content} />
        <DocumentControls eventhandlers="some_event_handlers" />
      </DocumentContainer>
    </div>
  );
};

export default Arrival;
