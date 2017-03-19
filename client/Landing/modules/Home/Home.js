import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Helmet title="Home" />
      <h1>Landing Page Home</h1>
      <strong><Link to="/wms">Start using WMS</Link></strong> now, for free.
    </div>
  );
};

export default Home;
