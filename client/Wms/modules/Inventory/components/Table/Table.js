import React from 'react';

import table from '../../../../components/table'

import styles from './Table.css';

const Table = table([
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
