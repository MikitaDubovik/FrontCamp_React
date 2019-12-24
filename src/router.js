import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { FilmDetailsContainer, HomeContainer } from './containers';
import { Routes } from './services';
import { ErrorBoundary } from './components';
import { NotFound } from './components'

const NoMatchPage = () => {
  return (
    <NotFound />
  );
};

export class Router extends React.Component {


  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route path={Routes.home} component={HomeContainer} exact />
          <Route path={Routes.filmDetail} component={FilmDetailsContainer} exact />
          <Route path={Routes.error} component={HomeContainer} exact />
          <Route component={NoMatchPage} />
        </Switch>
      </ErrorBoundary>
    );
  }
}
