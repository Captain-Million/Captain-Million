import React from 'react';
import Relay from 'react-relay';
import Helmet from 'react-helmet';

import {
  DocumentContainer,
  DocumentControls,
  DocumentHeader,
  ListView
} from '../../components';

import Table from './components/Table';
import formatDate from './../../../util/formatDate';

const Dispatch = ({ match, inventories }) => {
  const documentsList = inventories.inventories[0].documents.filter(item => item.act === 'dispatch');

  const documentsListView = documentsList.map((item) => {
    const newItem = {
      _id: item._id,
      title: `${item.title} ${item.createDate}`,
    };
    return (newItem);
  });

  const documentType = 'Dispatch act';
  let currentDocument = documentsList.filter(x => x._id === match.params.id)[0];
  currentDocument = currentDocument || documentsList[0];
  return (
    <div>
      <Helmet title="Dispatch acts" />
      <ListView list={documentsListView} urlPrefix="dispatch" itemType={documentType} header="Dispatch acts" />
      { currentDocument && 
        <DocumentContainer>
          <DocumentHeader itemType={documentType} name={`${currentDocument.title} ${currentDocument.createDate}`} />
          <Table products={currentDocument.content} />
          <DocumentControls eventhandlers="some_event_handlers" />
        </DocumentContainer>
      }
    </div>
  );
};

const DispatchContainer = Relay.createContainer(Dispatch, {
  fragments: {
    inventories: () => Relay.QL`
      fragment on Inventories {
        inventories {
          documents {
            act,
            _id,
            title,
            createDate,
            content {
              name,
              quantity,
            }
          }
        }
      }
    `,
  },
});

export default DispatchContainer;

