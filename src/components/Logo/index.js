import React from 'react';
import { Link } from 'react-router-dom';
import StyledLogo from './StyledLogo';

const Logo = () => (
  <Link to='/'>
    <StyledLogo>
      <img
        src='https://res.cloudinary.com/toga-insure/image/upload/v1589798290/CommingSoonPage/TogaLogo_2x_xhi9a1.png'
        alt='logo'
      />
      <p className='logo-text'>Toga</p>
    </StyledLogo>
  </Link>
);

export default Logo;
