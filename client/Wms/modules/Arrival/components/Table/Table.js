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
  },
]);

export default Table;

