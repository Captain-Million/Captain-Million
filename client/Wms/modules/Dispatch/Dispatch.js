import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay/classic';
import Helmet from 'react-helmet';

import {
  DocumentContainer,
  DocumentControls,
  DocumentHeader,
  ListView,
} from '../../components';

import Table from './components/Table';
import formatDate from './../../../util/formatDate';

const Dispatch = ({ match, inventories }) => {
  const documentsList = inventories.inventories[0].documents.filter(item => item.act === 'dispatch');

  const documentsListView = documentsList.map((item) => {
    const newItem = {
      _id: item._id,
      title: `${item.title} ${formatDate(item.createDate)}`,
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
          <DocumentHeader itemType={documentType} name={`${currentDocument.title} ${formatDate(currentDocument.createDate)}`} />
          <Table products={currentDocument.content} />
          <DocumentControls eventhandlers="some_event_handlers" />
        </DocumentContainer>
      }
    </div>
  );
};

Dispatch.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  inventories: PropTypes.shape({
    inventories: PropTypes.arrayOf(PropTypes.shape({
      documents: PropTypes.arrayOf(PropTypes.shape({
        act: PropTypes.string,
        _id: PropTypes.string,
        title: PropTypes.string,
        createDate: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.any),
      })),
    })),
  }).isRequired,
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

