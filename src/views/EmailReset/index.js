import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../utils/axiosConfig';
import EmailResetStyle from './Style';

const EmailReset = ({ history }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/recover-email', { email })
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          toast.success(response.data.message);
          history.push('/email-reset-success');
        }
      })
      .catch((error) => {
        setLoading(false);

        if (error.message === 'Network Error') {
          return toast.error('Something went wrong. Please try Again');
        }
        
        toast.error(error.response.data.error + ' with us');
      });
  };
  return (
    <EmailResetStyle>
      <div className='top-decor'>
        <hr />
        <img src='' alt='' />
        <hr />
      </div>
      <h2>Forgot Password?</h2>
      <p>We would send a password reset link to your email address.</p>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <i className='icon fa fa-envelope'></i>
          <input
            id='email'
            type='email'
            placeholder='Email'
            name='email'
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <button disabled={loading} className='btn'>
          Submit{loading ? 'ing' : ''}
        </button>
      </form>
    </EmailResetStyle>
  );
};

export default EmailReset;
