import * as types from '../../actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

const signupUserError = (error) => {
  return { type: types.USER_SIGNUP_FAIL, payload: error };
};

export const signupRequest = (userCredential, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'auth/register-company',
        userCredential
      );
      if (response.status === 200) {
        toast.success(`Sign up was Successful
        ${response.data.message}
        `);
        setTimeout(() => {
          /* istanbul ignore next */
          // dispatch auth
          history.push('/signup-success');
        }, 3000);
      }
    } catch (error) {
      /* istanbul ignore next */
      if (error.message === 'Network Error') {
        return toast.error('Something went wrong. Please try Again');
      }
      /* istanbul ignore next */
      toast.error(error.error);
      /* istanbul ignore next */
      dispatch(signupUserError(error.error));
    }
  };
};
