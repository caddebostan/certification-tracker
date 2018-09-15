import { API_STATUS } from '../constants/reduxTypes';

const initialState = {
  status: API_STATUS.INIT,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_STATUS.FETCHING:
      return {
        ...initialState,
        status: API_STATUS.FETCHING,
      };
    case API_STATUS.FETCHED:
      return {
        ...initialState,
        status: API_STATUS.FETCHING,
      };
    case API_STATUS.FAILED:
      return {
        status: API_STATUS.FAILED,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
