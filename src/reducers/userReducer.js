import { SAVE_USER_DATA } from '../constants/reduxTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
