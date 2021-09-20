import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MoviePage from '../pages/MoviePage';
import Movies from '../pages/Movies';
import Auth from './Auth/Auth';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/auth"><Auth/></Route>
      <Route exact path="/movies"><Movies/></Route>
      <Route exact path="/movies/:id"><MoviePage/></Route>
      <Redirect to="/movies"/>
    </Switch>
  );
};

export default AppRouter;