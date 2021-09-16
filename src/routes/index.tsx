import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" exact component={SignUp} />
  </Switch>
);

export default Routes;
