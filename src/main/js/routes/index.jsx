import React from 'react';
import { Switch, Route } from 'react-router';
import LoginContainer from 'containers/LoginContainer';
import OrganogramContainer from 'containers/OrganogramContainer';

function routes() {
  const auth = window.localStorage.getItem('userId');

  return (
    <Switch>
      {!auth ?
        <Route path="/" component={LoginContainer} /> :
        <Route path="/" component={OrganogramContainer} />
      }
    </Switch>
  );
}

export default routes;
