import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Editor, Post, About, Auth, Page404, Tags } from './pages';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/editor/:postid" component={Editor} />
      <Route exact path="/editor/" component={Editor} />
      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/tag" component={Tags} />
      <Route exact path="/tag/:id" component={Tags} />
      <Route exact path="/aboutMe" component={About} />
      <Route exact path="/auth" component={Auth} />
      <Route component={Page404} />
    </Switch>
  );
};
