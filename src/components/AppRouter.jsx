import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Movies from '../pages/Movies';
import Auth from './Auth/Auth';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/auth"><Auth/></Route>
      <Route path="/movies"><Movies/></Route>
      <Redirect to="/movies"/>
    </Switch>
  );
};

export default AppRouter;