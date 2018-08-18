import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MovieSearch from './MovieSearch';
import Contacts from './Contacts';
import Projects from './Projects';
import Resume from './Resume';

export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/moviesearch" component={MovieSearch} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />

  </Switch>
);
