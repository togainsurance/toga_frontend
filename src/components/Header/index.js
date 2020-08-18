import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';
import Nav from '../Nav';

const Header = ({ user }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let headerContainer = document.getElementById('header-container');

      if (window.pageYOffset > 0) {
        headerContainer.classList.add('dark-header');
      } else {
        headerContainer.classList.remove('dark-header');
      }
    });
  });
  const [isOpen, setIsOpen] = useState(false);
  const updateIsOpenState = (e, state) => {
    e.nativeEvent.stopImmediatePropagation();
    setIsOpen(state);
  };
  return (
    <StyledHeader id='header-container' className='header-container'>
      <div className='header'>
        <Logo />
        {user.isAuthenticated ? (
          <p className='companyName'>{user.user.name}</p>
        ) : (
          <div>
            <ul className='header-items'>
              <li className='header-item desktop-only'>
                <Link to='/not-available'>Claims</Link>
              </li>
              <li className='header-item desktop-only'>
                <Link to='/not-available'>Repair Request</Link>
              </li>
              <li
                className='header-item'
                onClick={(e) => {
                  updateIsOpenState(e, true);
                }}
              >
                <svg
                  width='31'
                  height='24'
                  viewBox='0 0 31 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    y1='1.5'
                    x2='31'
                    y2='1.5'
                    stroke='black'
                    strokeWidth='3'
                  />
                  <line
                    x1='7'
                    y1='11.5'
                    x2='31'
                    y2='11.5'
                    stroke='black'
                    strokeWidth='3'
                  />
                  <line
                    x1='13'
                    y1='22.5'
                    x2='31'
                    y2='22.5'
                    stroke='black'
                    strokeWidth='3'
                  />
                </svg>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Nav
        open={isOpen}
        onClick={(e) => {
          updateIsOpenState(e, false);
        }}
      />
    </StyledHeader>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Header);
