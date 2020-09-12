import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import FooterStyle from './FooterStyles';
import Logo from '../Logo';

const Footer = ({ user }) => {
  return (
    <div>
      {user.isAuthenticated ? (
        ''
      ) : (
        <FooterStyle>
          <div className='footer-top'>
            <form className='footer-top__left'>
              <h2 className='footer-top__left-title'>Follow us</h2>
              <div className='footer-top__left__bottom'>
                <input type='email' id='subEmail' placeholder='Email Address' />
                <button className='btn'>send</button>
              </div>
              <SocialLinks />
            </form>
            <div className='footer-top__right'>
              <div className='footer-logo'>
                <Logo />
              </div>
              <div>
                <ul className='footer-items'>
                  <li className='footer-item'>
                    <Link to='/not-available'>Claims</Link>
                  </li>
                  <li className='footer-item'>
                    <Link to='/not-available'>Repair Request</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='footer-line' />
          <div className='footer-middle'>
            <p>
              Toga is a product of Toga Technology which is registered in the
              Federal Republic of Nigeria as a private limited liability
              company. Toga is operated in partnership with NAICOM approved
              insurers. We provide access to life and non-life insurance
              products and services to individuals and small businesses for the
              Nigerian market.{' '}
            </p>
          </div>
          <hr className='footer-line' />
          <div className='footer-bottom'>
            <p>Toga Technology, 2020.</p>
          </div>
        </FooterStyle>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Footer);
