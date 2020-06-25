import React, { useState } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import StyledHeader from "./StyledHeader";
import Nav from "../Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const updateIsOpenState = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHeader className="header-container">
      <div className="header">
        <Logo />
        <div>
          <ul className="header-items">
            <li className="header-item desktop-only">
              <Link to="/not-available">Claims</Link>
            </li>
            <li className="header-item desktop-only">
              <Link to="/not-available">Request Service</Link>
            </li>
            <li className="header-item" onClick={updateIsOpenState}>
              <svg
                width="31"
                height="24"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.5"
                  x2="31"
                  y2="1.5"
                  stroke="black"
                  strokeWidth="3"
                />
                <line
                  x1="7"
                  y1="11.5"
                  x2="31"
                  y2="11.5"
                  stroke="black"
                  strokeWidth="3"
                />
                <line
                  x1="13"
                  y1="22.5"
                  x2="31"
                  y2="22.5"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <hr className="header-line" />
      <Nav open={isOpen} onClick={updateIsOpenState} />
    </StyledHeader>
  );
};

export default Header;
