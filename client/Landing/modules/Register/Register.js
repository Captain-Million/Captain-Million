import React from 'react';
import Helmet from 'react-helmet';

import { Navigation, Footer } from '../../components';

const Register = () => {
  return (
    <div>
      <Helmet title="Register" />
      <Navigation />
      <div>
        <div>
          <p>No registration — no million.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
