import React from 'react';
import Helmet from 'react-helmet';

import { Navigation, Hero, Features, Disclaimer, Footer } from '../../components';

const ProductFeatures = () => {
  return (
    <div>
      <Helmet title="Features" />
      <Navigation />
      <Hero />
      <Features />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default ProductFeatures;
