import React from 'react';
import Helmet from 'react-helmet';

import {
  DocumentContainer,
  DocumentControls,
  DocumentHeader,
  ListView
} from '../../components';

import demoData from './../../../../__demo-data/demo-data';

const productsList = demoData.products;

const productsListView = productsList.map((item) => {
  const newItem = {
    _id: item._id,
    title: item.name,
  };
  return (newItem);
});

const Products = ({ match }) => {
  const itemType = 'Product';
  let currentProduct = productsList.filter(x => x._id === match.params.id)[0];
  currentProduct = currentProduct || productsList[0];
  return (
    <div>
      <Helmet title="Products" />
      <ListView list={productsListView} urlPrefix="products"header="Products" />
      <DocumentContainer>
        <DocumentHeader itemType={itemType} name={currentProduct.name} />
        <DocumentControls eventhandlers="some_event_handlers" />
      </DocumentContainer>
    </div>
  );
};

export default Products;
