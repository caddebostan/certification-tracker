import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import './assets/css/material-dashboard-react.css';
import './components/table/tableStyles.css';

import indexRoutes from './routes/index';

import configureStore from './config/store';

const history = createBrowserHistory();
const store = configureStore(undefined, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {indexRoutes.map(prop => <Route path={prop.path} component={prop.component} />)}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
