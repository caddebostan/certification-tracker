import api from '../utilities/api';
import { SAVE_USER_DATA, API_STATUS } from '../constants/reduxTypes';

export const fetchingLogin = () => ({
  type: API_STATUS.FETCHING,
});

export const failedLogin = data => ({
  type: API_STATUS.FAILED,
  payload: data,
});

export const saveUserData = data => ({
  type: SAVE_USER_DATA,
  payload: data,
});

export const successLogin = data => dispatch => {
  dispatch({ type: API_STATUS.FETCHED });
  dispatch(saveUserData(data));
};

export const login = data => dispatch => {
  try {
    dispatch(fetchingLogin());
    const reqData = {
      email: data.email,
      password: data.password,
    };
    api
      .get('/auth/login', reqData)
      .then(response => {
        dispatch(successLogin(response));
      })
      .catch(error => {
        dispatch(failedLogin(error));
      });
  } catch (error) {
    dispatch(failedLogin(error));
  }
};
