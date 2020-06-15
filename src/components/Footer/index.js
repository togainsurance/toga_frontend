import React from "react";
import "./Footer.css";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <form className="footer-top__left">
          <h2 className="footer-top__left-title">Message us, let’s talk</h2>
          <textarea
            className="msg-body"
            name="msg-body"
            id="msg-body"
            cols="30"
            rows="10"
            placeholder="Enter message"
          ></textarea>
          <div className="footer-top__left__bottom">
            <input type="email" id="email" placeholder="Email Address" />
            <button className="btn">send</button>
          </div>
        </form>
        <div className="footer-top__right">
          <Logo />
          <div>
            <ul className="footer-items">
              <li className="footer-item">Claims</li>
              <li className="footer-item">Request Service</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-middle">
        <p>
          Toga Micro-Insurance is registered in the Federal Republic of Nigeria
          as a private limited liability company. Toga insurance is operated in
          partnership with NAICOM approved insurers. We offer life and non-life
          micro insurance products and services to individuals and small
          businesses for the Nigerian market.{" "}
        </p>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p>Toga Micro-Insurance, 2020.</p>
      </div>
    </footer>
  );
};

export default Footer;
