import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledDashboard from './Style';
import { connect } from 'react-redux';
import { logout } from '../../views/Auth/Auth.actions';

const DashboardNav = ({ logout, history }) => {
  const handleLogout = () => {
    logout(history);
  };
  return (
    <StyledDashboard className='container'>
      <ul className='nav'>
        <li>
          <NavLink
            className='nav-item'
            to='/dashboard'
            activeClassName='active'
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-item' to='/payments' activeClassName='active'>
            payments
          </NavLink>
        </li>
        <li>
          <NavLink
            className='nav-item'
            to='/not-available'
            activeClassName='active'
          >
            request claim
          </NavLink>
        </li>
        <li>
          <NavLink
            className='nav-item'
            to='/not-available'
            activeClassName='active'
          >
            Request Service
          </NavLink>
        </li>
        <li>
          <NavLink
            className='nav-item'
            to='/not-available'
            activeClassName='active'
          >
            view devices
          </NavLink>
        </li>
      </ul>
      <div className='footer'>
        <div className='footer-item' onClick={handleLogout}>
          <i className='icon fa fa-sign-out'></i>
          <span className='cta2'>log out</span>
        </div>
      </div>
    </StyledDashboard>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, { logout })(DashboardNav);
