import React from 'react';
import Helmet from 'react-helmet';

import { Navigation, Disclaimer, Footer } from '../../components';

const Support = () => {
  return (
    <div>
      <Helmet title="Support" />
      <Navigation />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Support;
