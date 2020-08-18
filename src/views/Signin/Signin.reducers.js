import * as types from '../../actionTypes';
import initialState from '../../store/initialState';
const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_USER:
      return { ...state, user: action.payload };
    case types.SIGN_IN_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default signinReducer;
