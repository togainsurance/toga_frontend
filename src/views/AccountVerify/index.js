import React, { useEffect } from 'react';
import ComingSoonStyle from './Style';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AccountVerificationPage = ({ history }) => {
  let query = useQuery();

  useEffect(() => {
    const token = query.get('token');
    verifyToken(token);
  }, []);

  function verifyToken(token) {
    axios
      .post(
        '/verify-account',
        {},
        {
          headers: {
            authorization: `Basic ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            toast.success(
              'Account Verification was successful, sign in to continue'
            );
            history.push('/signin');
          }, 3000);
        }
      })
      .catch((error) => {
        if (error.message === 'Network Error') {
          return toast.error('Something went wrong. Please try Again');
        } else if (error.response.status === 400) {
          setTimeout(() => {
            toast.error(error.response.data.error);
            history.push('/signin');
          }, 1000);
        } else {
          toast.error(error.response.data.error);
          history.push('/restart-verification');
        }
      });
  }
  return (
    <ComingSoonStyle>
      <h1>Account Verification</h1>
      <p>Your Account is being verified</p>
    </ComingSoonStyle>
  );
};

export default AccountVerificationPage;
