import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const Dispatch = () => {
  return (
    <div>
      <Helmet title="Dispatch" />
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Dispatch;
