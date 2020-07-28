import React from "react";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "react-share";
import SocialLinkStyle from "./Style";

const SocialLinks = () => {
  return (
    <SocialLinkStyle>
      <a
        className="social-icon"
        href="https://www.linkedin.com/company/toga-device-insurance/"
      >
        <LinkedinIcon borderRadius={13} size={42} />
      </a>
      <a className="social-icon" href="https://twitter.com/Togainsurance">
        <TwitterIcon borderRadius={13} size={42} />
      </a>
      <a
        className="social-icon"
        href="https://web.facebook.com/Toga-Insurance-112873167149820/"
      >
        <FacebookIcon borderRadius={13} size={42} />
      </a>
    </SocialLinkStyle>
  );
};

export default SocialLinks;
