import { combineReducers } from 'redux';
import signinReducer from '../views/Signin/Signin.reducers';
import authReducer from '../views/Auth/Auth.reducers';

const rootReducer = combineReducers({
  authToken: signinReducer,
  user: authReducer,
});

export default rootReducer;
