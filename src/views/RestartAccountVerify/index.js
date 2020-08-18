import React, { useState } from 'react';
import axios from '../../utils/axiosConfig';
import EmailResetStyle from './Style';

const EmailReset = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post('/resend-verification-code', { email })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <EmailResetStyle>
      <div className='top-decor'>
        <hr />
        <img src='' alt='' />
        <hr />
      </div>
      <h2>Verification link Expired?</h2>
      <p>We would resend a verification link to your email address.</p>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <i className='icon fa fa-envelope'></i>
          <input
            id='email'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <button className='btn'>Submit</button>
      </form>
    </EmailResetStyle>
  );
};

export default EmailReset;
