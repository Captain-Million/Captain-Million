import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const Products = () => {
  return (
    <div>
      <Helmet title="Products" />
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Products;
