import React from 'react';

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

export default Table;
