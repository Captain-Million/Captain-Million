import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import DocumentHeader from './../../components/DocumentHeader/DocumentHeader';
import DocumentControls from './../../components/DocumentControls/DocumentControls';
import Table from './components/Table/Table';

const demoData = require('./../../../../__demo-data/demo-data');

const documentsList = demoData.documents.filter(item => item.act === 'inventory');

const documentsListView = documentsList.map((item) => {
  const { _id, lastEdit: { date } } = item;
  return ({ _id, date });
});

const Inventory = ({ match }) => {
  const documentType = 'Inventory act';
  let currentDocument = documentsList.filter(x => x._id === match.params.id)[0];
  currentDocument = currentDocument || documentsList[0];
  return (
    <div>
      <Helmet title="Arrival acts" />
      <ListView list={documentsListView} urlPrefix="inventory" documentType={documentType} header="Inventory acts" />
      <DocumentContainer>
        <DocumentHeader documentType={documentType} date={currentDocument.lastEdit.date} />
        <Table products={currentDocument.content} />
        <DocumentControls eventhandlers="some_event_handlers" />
      </DocumentContainer>
    </div>
  );
};

export default Inventory;
