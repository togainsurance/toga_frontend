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
        <li>
          <Link to="/device">Device Insurance</Link>
        </li>
        <hr />
        <li>Malaria Insurance</li>
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
