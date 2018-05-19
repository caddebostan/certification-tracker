import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './assets/css/material-dashboard-react.css';

import indexRoutes from './routes/index';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map(prop => {
        return <Route path={prop.path} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root'),
);
