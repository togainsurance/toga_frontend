import React from "react";
import StyledNav from "./StyledNav";

const Nav = ({ onClick, open }) => {
  return (
    <StyledNav open={open}>
      <div onClick={onClick} className="closeButton">
        X
      </div>
      <ul>
        <li>Device Insurance</li>
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
