import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay/classic';
import Helmet from 'react-helmet';

import {
  DocumentContainer,
  DocumentControls,
  DocumentHeader,
  ListView,
} from '../../components';

const Products = ({ match, inventories }) => {
  const productsList = inventories.inventories[0].products;

  const productsListView = productsList.map((item) => {
    const newItem = {
      _id: item._id,
      title: item.name,
    };
    return (newItem);
  });

  const itemType = 'Product';
  let currentProduct = productsList.filter(x => x._id === match.params.id)[0];
  currentProduct = currentProduct || productsList[0];
  return (
    <div>
      <Helmet title="Products" />
      <ListView list={productsListView} urlPrefix="products"header="Products" />
      { currentProduct &&
        <DocumentContainer>
          <DocumentHeader itemType={itemType} name={currentProduct.name} />
          <DocumentControls eventhandlers="some_event_handlers" />
        </DocumentContainer>
      }
    </div>
  );
};

Products.propTypes = {
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

const ProductsContainer = Relay.createContainer(Products, {
  fragments: {
    inventories: () => Relay.QL`
      fragment on Inventories {
        inventories {
          products {
            _id,
            name,
          }
        }
      }
    `,
  },
});

export default ProductsContainer;

