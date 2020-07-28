import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./StyledNav";
import SocialLinks from "../SocialLinks";

const Nav = ({ onClick, open }) => {
  return (
    <StyledNav onClick={onClick} open={open}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="nav"
      >
        <div onClick={onClick} className="closeButton">
          X
        </div>
        <ul>
          <li onClick={onClick} className="header-item mobile-only">
            <Link to="/not-available">Claims</Link>
          </li>
          <hr className="mobile-only" />
          <li onClick={onClick} className="header-item mobile-only">
            <Link to="/not-available">Request Service</Link>
          </li>
          <hr className="mobile-only" />
          <li onClick={onClick}>
            <Link to="/device">Device Insurance</Link>
          </li>
          <hr />
          <li onClick={onClick}>
            <Link to="/malaria">Malaria Insurance</Link>
          </li>
          <hr />
          <li onClick={onClick}>
            <Link to="/basic-life">Basic Life Insurance</Link>
          </li>
          <hr />
          <li onClick={onClick}>
            <Link to="/referral">Refer a friend</Link>
          </li>
          <hr />
          <li onClick={onClick}>
            <Link to="/not-available">Help Center</Link>
          </li>
        </ul>
        <footer>
          <SocialLinks />
        </footer>
      </div>
    </StyledNav>
  );
};

export default Nav;
