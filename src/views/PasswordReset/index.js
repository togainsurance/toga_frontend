import React, { useState } from 'react';
import EmailResetStyle from './Style';
import { FormTopDecor } from '../commonStyle';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EmailReset = ({ history }) => {
  const [state, setState] = useState({ password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  let query = useQuery();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      const token = query.get('token');
      axios
        .patch(`/reset-password?token=${token}`, { password: state.password })
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
            }, 2000);
          } else {
            toast.error(error.response.data.error);
            history.push('/email-reset');
          }
        });
    } else {
      toast.error('Ensure the passwords match');
    }
  };
  return (
    <EmailResetStyle>
      <FormTopDecor>
        <hr />
        <img
          src='https://res.cloudinary.com/toga-insure/image/upload/v1597412863/CommingSoonPage/2427279_pckyk0.jpg'
          alt='Decoration'
        />
        <hr />
      </FormTopDecor>
      <h2>Forgot Password?</h2>
      <p>We would send a password reset link to your email address.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='password'>
          <span>Password: </span>
          <div className='input-container'>
            <i className='icon fa fa-eye-slash'></i>
            <input
              id='password'
              type='password'
              placeholder='Password'
              required
              name='password'
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <ul className='input-requirements'>
            <li>This input needs to be between 8 and 100 characters</li>
            <li>Contains at least 1 number</li>
            <li>Contains at least 1 lowercase letter</li>
            <li>Contains at least 1 uppercase letter</li>
            <li>Contains a special character (e.g. @ !)</li>
          </ul>
        </label>
        <label htmlFor='confirmPassword'>
          <span>Repeat Password: </span>
          <div className='input-container'>
            <i className='icon fa fa-eye-slash'></i>
            <input
              id='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              required
              name='confirmPassword'
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </label>
        <button className='btn'>Submit</button>
      </form>
    </EmailResetStyle>
  );
};

export default EmailReset;
