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
    name: 'expected',
    title: 'Expected',
    options: 'disabled'
  },
  {
    type: 'number',
    name: 'quantity',
    title: 'Actual'
  },
  {
    type: 'number',
    name: 'divergence',
    title: 'Divergence',
    options: 'results'
  }
]);

export default Table;
