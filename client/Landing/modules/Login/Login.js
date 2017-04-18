import React from 'react';
import Helmet from 'react-helmet';

import { Navigation, Footer } from '../../components';

const Login = () => {
  return (
    <div>
      <Helmet title="Login" />
      <Navigation />
      <div>
        <div>
          <h1>Login form</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
