import React from 'react';
import Helmet from 'react-helmet';

import { Navigation, Hero, Features, Disclaimer, Footer } from '../../components';

const Home = () => {
  return (
    <div>
      <Helmet title="Home" />
      <Navigation />
      <Hero />
      <Features />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Home;
