import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import Helmet from 'react-helmet';

import {
  DocumentContainer,
  DocumentControls,
  DocumentHeader,
  ListView,
} from '../../components';

import Table from './components/Table';
import formatDate from './../../../util/formatDate';


const Inventory = ({ match, inventories }) => {
  const documentsList = inventories.inventories[0].documents.filter(item => item.act === 'inventory');

  const documentsListView = documentsList.map((item) => {
    const newItem = {
      _id: item._id,
      title: `${item.title} ${formatDate(item.createDate)}`,
    };

    return (newItem);
  });

  const documentType = 'Inventory act';
  let currentDocument = documentsList.filter(x => x._id === match.params.id)[0];
  currentDocument = currentDocument || documentsList[0];

  const tableData = currentDocument &&
    currentDocument.content.map((item) => {
      const data = { ...item };
      data.expected = Math.floor(Math.random() * 2);
      data.divergence = data.quantity - data.expected;
      return data;
    });

  return (
    <div>
      <Helmet title="Arrival acts" />
      <ListView list={documentsListView} urlPrefix="inventory" itemType={documentType} header="Inventory acts" />
      { currentDocument &&
        <DocumentContainer>
          <DocumentHeader itemType={documentType} name={`${currentDocument.title} ${formatDate(currentDocument.createDate)}`} />
          <Table products={tableData} />
          <DocumentControls eventhandlers="some_event_handlers" />
        </DocumentContainer>
      }
    </div>
  );
};

Inventory.propTypes = {
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

const InventoryContainer = Relay.createContainer(Inventory, {
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

export default InventoryContainer;

