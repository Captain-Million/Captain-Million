import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div>
      <Helmet title="Landing" />
      <h1>Landing Page</h1>
      <strong><Link to="/wms">Start using WMS</Link></strong> now, for free.
    </div>
  );
};

export default LandingPage;
