import React from 'react';
import Helmet from 'react-helmet';

import { Navigation, Footer } from '../../components';

const Support = () => {
  return (
    <div>
      <Helmet title="Support" />
      <Navigation />
      <div>
        <div>
          <p>Hey, stop it! Stop It! Go away! We offer no support!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
