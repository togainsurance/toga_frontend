import * as types from '../../actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';
import { setUser } from '../Auth/Auth.actions';

const signinUser = (user) => {
  return { type: types.SIGN_IN_USER, payload: user };
};

const signinUserError = (error) => {
  return { type: types.SIGN_IN_USER_ERROR, payload: error };
};

export const signinRequest = (userCredential, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('auth/signin-company', userCredential);
      if (response.status === 200) {
        const userToken = response.data.data;
        localStorage.setItem('userToken', JSON.stringify(userToken));
        toast.success('Sign In Successful');

        setTimeout(() => {
          /* istanbul ignore next */
          // dispatch auth
          dispatch(setUser(userToken, history));
          history.push('/dashboard');
        }, 3000);
        dispatch(signinUser(userToken));
      }
    } catch (error) {
      /* istanbul ignore next */
      if (error.message === 'Network Error') {
        return toast.error('Something went wrong. Please try Again');
      }
      /* istanbul ignore next */
      const { message } = error.response;
      /* istanbul ignore next */
      toast.error('Invalid email/password provided');
      /* istanbul ignore next */
      dispatch(signinUserError(message));
    }
  };
};
