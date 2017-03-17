import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const productsList = [
  { name: '17.01.17 09:12', _id: 'lk35jl3k' },
  { name: '17.01.17 10:12', _id: '8fg78fg86' },
  { name: '17.01.17 11:12', _id: 's0fgh4' },
  { name: '17.01.17 12:12', _id: 'klnl3k46' },
  { name: '17.01.17 13:12', _id: 'sd8g7sdf86' },
  { name: '17.01.17 14:12', _id: 'lk109dfg' },
];

const Products = () => {
  return (
    <div>
      <Helmet title="Products" />
      <ListView list={productsList} urlPrefix="product" documentType="Product" />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Products;
