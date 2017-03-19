/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wms from './Wms/Wms';
import Landing from './Landing/Landing';

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router>
        <Switch>
          <Route path="/wms" component={Wms}/>          
          <Route path="/" component={Landing}/>
        </Switch>
      </Router>
    </Provider>
  );
}
