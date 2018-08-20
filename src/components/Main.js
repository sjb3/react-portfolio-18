import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import RecipeSearch from './RecipeSearch';
import Contacts from './Contacts';
import Projects from './Projects';
import Resume from './Resume';
import Recipe from './Recipe';

export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/recipesearch" component={RecipeSearch} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/recipe/:id" component={Recipe} />

  </Switch>
);
