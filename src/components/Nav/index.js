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
        <li className="header-item mobile-only">Claims</li>
        <hr className="mobile-only" />
        <li className="header-item mobile-only">Request Service</li>
        <hr className="mobile-only" />
        <li>
          <Link to="/device">Device Insurance</Link>
        </li>
        <hr />
        <li>
          <Link to="/malaria">Malaria Insurance</Link>
        </li>
        <hr />
        <li>Basic Life Insurance</li>
        <hr />
        <li>Refer a friend</li>
        <hr />
        <li>Help Center</li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
