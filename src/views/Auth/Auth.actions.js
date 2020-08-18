import { SET_CURRENT_USER } from '../../actionTypes';
import decode from 'jwt-decode';

const setCurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};

export const setUser = (token, history) => (dispatch) => {
  const decoded = decode(token);
  const currentTime = Date.now() / 1000;
  if (!token || decoded.exp < currentTime) {
    history.push('/signin');
    return dispatch(setCurrentUser({}));
  }
  return dispatch(setCurrentUser(decoded));
};

export const logout = (history) => (dispatch) => {
  // remove token
  console.log('me sef dey call roll');
  localStorage.removeItem('userToken');
  history.push('/signin');
  return dispatch(setCurrentUser({}));
};
