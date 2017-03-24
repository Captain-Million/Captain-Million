import React from 'react';
import Helmet from 'react-helmet';

import { DocumentContainer, DocumentHeader } from '../../components';
import Table from './components/Table';
import formatDate from './../../../util/formatDate';
import demoData from './../../../../__demo-data/demo-data';

const Report = () => {
  return (
    <div>
      <Helmet title="Stock quantity report" />
      <DocumentContainer>
        <DocumentHeader itemType={'Stock Report'} name={formatDate(new Date())} />
        <Table products={demoData.products} />
      </DocumentContainer>
    </div>
  );
};

export default Report;
