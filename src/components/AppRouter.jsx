import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { routes } from '../router/router';


const AppRouter = () => {
  return (
    <Switch>
      {routes.map(route =>
        <Route 
          component={route.component} 
          path={route.path} 
          exact={route.exact}
          key={route.path}
        />
      )}
      <Redirect to="/movies"/>
    </Switch>
  );
};

export default AppRouter;