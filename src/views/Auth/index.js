import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { store } from '../../index';
import { setUser } from './Auth.actions';

export default function Auth({ children }) {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.userToken) {
      // get user object
      const userToken = JSON.parse(localStorage.userToken);
      if (userToken) {
        store.dispatch(setUser(userToken, history));
      }
    } else {
      history.push('/signin');
    }
  }, [pathname, history]);

  return <>{children}</>;
}
