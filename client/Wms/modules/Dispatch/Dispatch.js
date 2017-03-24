import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import DocumentHeader from './../../components/DocumentHeader/DocumentHeader';
import DocumentControls from './../../components/DocumentControls/DocumentControls';
import Table from './components/Table';
import formatDate from './../../../util/formatDate';
import demoData from './../../../../__demo-data/demo-data';

const documentsList = demoData.documents.filter(item => item.act === 'dispatch');

const documentsListView = documentsList.map((item) => {
  const newItem = {
    _id: item._id,
    title: formatDate(item.lastEdit.date),
  };
  return (newItem);
});

const Dispatch = ({ match }) => {
  const documentType = 'Dispatch act';
  let currentDocument = documentsList.filter(x => x._id === match.params.id)[0];
  currentDocument = currentDocument || documentsList[0];
  return (
    <div>
      <Helmet title="Dispatch acts" />
      <ListView list={documentsListView} urlPrefix="dispatch" itemType={documentType} header="Dispatch acts" />
      <DocumentContainer>
        <DocumentHeader itemType={documentType} name={formatDate(currentDocument.lastEdit.date)} />
        <Table products={currentDocument.content} />
        <DocumentControls eventhandlers="some_event_handlers" />
      </DocumentContainer>
    </div>
  );
};

export default Dispatch;
