import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import FooterStyle from './FooterStyles';
import Logo from '../Logo';

const Footer = () => {
  return (
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
          Toga Insurance is registered in the Federal Republic of Nigeria as a
          private limited liability company. Toga insurance is operated in
          partnership with NAICOM approved insurers. We offer life and non-life
          micro insurance products and services to individuals and small
          businesses for the Nigerian market.{' '}
        </p>
      </div>
      <hr className='footer-line' />
      <div className='footer-bottom'>
        <p>Toga Technology, 2020.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
