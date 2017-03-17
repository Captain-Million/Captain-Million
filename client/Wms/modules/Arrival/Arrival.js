import React from 'react';
import Helmet from 'react-helmet';

import ListView from './../../components/ListView/ListView';
import DocumentContainer from './../../components/DocumentContainer/DocumentContainer';
import Navigation from './../../components/Navigation/Navigation';

const Arrival = () => {
  return (
    <div>
      <Helmet title="Arrival" />
      <ListView />
      <DocumentContainer />
      <Navigation />
    </div>
  );
};

export default Arrival;
