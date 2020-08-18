import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpStyle from './Style';
import { FormTopDecor } from '../commonStyle';
import { signupRequest } from './Signup.actions';

const SignUp = ({ signupRequest, history }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    address: '',
    phonenumber: '',
    website: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signupRequest(state, history);
    setLoading(false);
  };

  return (
    <SignUpStyle>
      <FormTopDecor className='top-decor'>
        <hr />
        <img
          src='https://res.cloudinary.com/toga-insure/image/upload/v1597412863/CommingSoonPage/2427279_pckyk0.jpg'
          alt='Decoration'
        />
        <hr />
      </FormTopDecor>
      <h2>Hello There !</h2>
      <p>Let's get started</p>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <i className='icon fa fa-briefcase'></i>
          <input
            id='companyName'
            type='text'
            placeholder='Company/Team Name'
            required
            value={state.name}
            name='name'
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <i className='icon fa fa-envelope'></i>
          <input
            id='email'
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div className='input-container'>
          <i className='icon fa fa-address-card'></i>
          <input
            id='address'
            type='text'
            placeholder='Address'
            required
            value={state.address}
            name='address'
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <i className='icon fa fa-phone'></i>
          <input
            id='phoneNumber'
            type='tel'
            placeholder='Phone'
            required
            name='phonenumber'
            value={state.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <i className='icon fa fa-globe'></i>
          <input
            id='website'
            type='url'
            placeholder='Business Website (optional)'
            name='website'
            value={state.website}
            onChange={handleChange}
          />
        </div>
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
        <div className='terms-of-service'>
          <input type='checkbox' name='contract' />{' '}
          <span>
            I agree to the{' '}
            <Link className='cta' to='/not-available'>
              Terms of Service
            </Link>
          </span>
        </div>
        <button disabled={loading} className='btn'>
          Sign{loading ? 'ing' : ''} Up
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <Link className='cta' to='/signin'>
          Sign in here
        </Link>
      </p>
    </SignUpStyle>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signupRequest: async (signUpCredentials, history) => {
      return dispatch(await signupRequest(signUpCredentials, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
