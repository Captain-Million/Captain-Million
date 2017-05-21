import Relay from 'react-relay/classic';

import createTable from '../../../../HOC/createTable';

const Table = createTable([
  {
    type: 'lineNumber',
    name: 'lineNumber',
    title: null,
  },
  {
    type: 'text',
    name: 'name',
    title: 'Product Name',
  },
  {
    type: 'number',
    name: 'quantity',
    title: 'Quantity',
    options: 'disabled',
  },
]);

const TableContainer = Relay.createContainer(Table, {
  fragments: {
    products: () => Relay.QL`
      fragment on Product @relay(plural: true) {
        _id,
        name,
        quantity,
      }
    `,
  },
});

export default TableContainer;

