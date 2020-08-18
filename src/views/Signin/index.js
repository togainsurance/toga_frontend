import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinRequest } from './Signin.actions';
import SigninStyle from './Style';
import { FormTopDecor } from '../commonStyle';

const Signin = ({ signinRequest, history }) => {
  const [state, setState] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await signinRequest(state, history);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SigninStyle>
      <FormTopDecor className='top-decor'>
        <hr />
        <img
          src='https://res.cloudinary.com/toga-insure/image/upload/v1597412863/CommingSoonPage/2427279_pckyk0.jpg'
          alt='Decoration'
        />
        <hr />
      </FormTopDecor>
      <h2>Hello There !</h2>
      <p>Enter account details</p>
      <form onSubmit={handleSubmit}>
        <div className='field-container'>
          <div className='input-container'>
            <i className='icon fa fa-envelope'></i>
            <input
              id='email'
              type='email'
              placeholder='Email'
              name='email'
              required
              value={state.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='field-container'>
          <div className='input-container'>
            <i className='icon fa fa-eye-slash'></i>
            <input
              id='password'
              type='password'
              placeholder='Password'
              name='password'
              required
              value={state.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button disabled={loading} className='btn'>
          Sign{loading ? 'ing' : ''} in
        </button>
      </form>
      <Link className='cta2' to='/email-reset'>
        Forgot Password?
      </Link>
      <p>
        Don't have an account yet?{' '}
        <Link className='cta' to='/signup'>
          Sign up here
        </Link>
      </p>
    </SigninStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signinRequest: async (userCredentials, history) => {
      return dispatch(await signinRequest(userCredentials, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
