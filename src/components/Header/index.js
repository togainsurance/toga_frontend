import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/toga-insure/image/upload/v1589798290/CommingSoonPage/TogaLogo_2x_xhi9a1.png"
            alt="logo"
          />
          Toga
        </div>
        <div>
          <ul className="header-items">
            <li className="header-item">Claims</li>
            <li className="header-item">Request Service</li>
            <li className="header-item">
              <a href="#">
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
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="header-line" />
    </header>
  );
};

export default Header;
