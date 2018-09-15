import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import applicationReducer from './applicationReducer';
import userReducer from './userReducer';

export default combineReducers({
  router: routerReducer,
  form: reduxFormReducer,
  user: userReducer,
  application: applicationReducer,
});
