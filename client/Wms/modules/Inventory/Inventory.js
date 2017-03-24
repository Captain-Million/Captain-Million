import React from 'react';
import Helmet from 'react-helmet';

import {
  DocumentContainer,
  DocumentControls,
  DocumentHeader,
  ListView
} from '../../components';

import Table from './components/Table';
import formatDate from './../../../util/formatDate';
import demoData from './../../../../__demo-data/demo-data';

const documentsList = demoData.documents.filter(item => item.act === 'inventory');

const documentsListView = documentsList.map((item) => {
  const newItem = {
    _id: item._id,
    title: formatDate(item.lastEdit.date),
  };
  return (newItem);
});

const Inventory = ({ match }) => {
  const documentType = 'Inventory act';
  let currentDocument = documentsList.filter(x => x._id === match.params.id)[0];
  currentDocument = currentDocument || documentsList[0];

  const tableData = currentDocument.content.map(item => {
    const data = { ...item };
    data.expected = Math.floor(Math.random() * 2),
    data.divergence = data.quantity - data.expected;
    return data;
  });

  return (
    <div>
      <Helmet title="Arrival acts" />
      <ListView list={documentsListView} urlPrefix="inventory" itemType={documentType} header="Inventory acts" />
      <DocumentContainer>
        <DocumentHeader itemType={documentType} name={formatDate(currentDocument.lastEdit.date)} />
        <Table products={tableData} />
        <DocumentControls eventhandlers="some_event_handlers" />
      </DocumentContainer>
    </div>
  );
};

export default Inventory;
