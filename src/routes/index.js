import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Order from '~/pages/Order';
import Product from '~/pages/Product';
import Client from '~/pages/Client';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/order" component={Order} isPrivate />
      <Route path="/product" component={Product} isPrivate />
      <Route path="/client" component={Client} isPrivate />
    </Switch>
  );
}
