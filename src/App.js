import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import LandingPage from './LandingPage';
import CartPage from './Cart';
export default function Routes() {
  return (
      <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
    
  );
}