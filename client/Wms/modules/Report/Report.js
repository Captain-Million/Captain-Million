import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import Helmet from 'react-helmet';

import { DocumentContainer, DocumentHeader } from '../../components';
import Table from './components/Table';
import formatDate from './../../../util/formatDate';

const Report = (props) => {
  return (
    <div>
      <Helmet title="Stock quantity report" />
      <DocumentContainer>
        <DocumentHeader itemType={'Stock Report'} name={formatDate()} />
        <Table products={props.inventories.inventories[0].products} />
      </DocumentContainer>
    </div>
  );
};

Report.propTypes = {
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

const ReportContainer = Relay.createContainer(Report, {
  fragments: {
    inventories: () => Relay.QL`
      fragment on Inventories {
        inventories {
          products {
            ${Table.getFragment('products')}
          }
        }
      }
    `,
  },
});

export default ReportContainer;

