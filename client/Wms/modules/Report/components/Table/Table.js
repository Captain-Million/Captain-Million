import React from 'react';
import Relay from 'react-relay';

import createTable from '../../../../HOC/createTable'

const Table = createTable([
  {
    type: 'lineNumber',
    name: 'lineNumber',
    title: null
  },
  {
    type: 'text',
    name: 'name',
    title: 'Product Name'
  },
  {
    type: 'number',
    name: 'quantity',
    title: 'Quantity',
    options: 'disabled'
  }
]);

const TableContainer = Relay.createContainer(Table, {
  fragments: {
    products: () => Relay.QL`
      fragment on Product @relay(plural: true) {
        _id
        ${TableRow.getFragment('product')}
      }
    `,
  },
});

export default TableContainer;

