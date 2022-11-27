import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-upper">
        <div id="footer-upper-left">
          <p id="footer-location">📍India</p>
          <p id="footer-contact">
            <span>+91-8448772593</span>
            <span>pathak2002ujjwal@gmail.com</span>
          </p>
        </div>
        <div id="footer-upper-right">
          <span>
            <SocialIcon
              url="https://www.linkedin.com/in/ujjwalpathaak/"
              bgColor="transparent"
              fgColor="rgb(240 121 197 / 65%)"
              target="_blank"
            />
          </span>
          <span>
            <SocialIcon
              url="https://github.com/ujjwalpathaak"
              bgColor="transparent"
              fgColor="rgb(240 121 197 / 65%)"
              target="_blank"
            />
          </span>
          <span>
            <SocialIcon
              url="https://www.instagram.com/ujjwalpathaak/"
              bgColor="transparent"
              fgColor="rgb(240 121 197 / 65%)"
              target="_blank"
            />
          </span>
        </div>
      </div>
      <div id="footer-lower">Made with ❤️ by Ujjwal</div>
    </div>
  );
};

export default Footer;
