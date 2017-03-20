import React from 'react';
import Helmet from 'react-helmet';

import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import DocumentHeader from './../../components/DocumentHeader/DocumentHeader';
import Table from './components/Table/Table';

const demoData = require('./../../../../__demo-data/demo-data');

const Report = () => {
  return (
    <div>
      <Helmet title="Stock quantity report" />
      <DocumentContainer>
        <DocumentHeader documentType={'Stock Report'} />
        <Table products={demoData.products} />
      </DocumentContainer>
    </div>
  );
};

export default Report;
