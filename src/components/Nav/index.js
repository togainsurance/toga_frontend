import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./StyledNav";

const Nav = ({ onClick, open }) => {
  return (
    <StyledNav open={open}>
      <div onClick={onClick} className="closeButton">
        X
      </div>
      <ul>
        <li className="header-item mobile-only">
          <Link to="/not-available">Claims</Link>
        </li>
        <hr className="mobile-only" />
        <li className="header-item mobile-only">
          <Link to="/not-available">Request Service</Link>
        </li>
        <hr className="mobile-only" />
        <li>
          <Link to="/device">Device Insurance</Link>
        </li>
        <hr />
        <li>
          <Link to="/malaria">Malaria Insurance</Link>
        </li>
        <hr />
        <li>
          <Link to="/basic-life">Basic Life Insurance</Link>
        </li>
        <hr />
        <li>
          <Link to="/referral">Refer a friend</Link>
        </li>
        <hr />
        <li>
          <Link to="/not-available">Help Center</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
