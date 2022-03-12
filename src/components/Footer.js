import React from "react";
import twitter from "../images/Twitter Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";

function Footer() {
  return (
    <div className="footer-cont">
      <img src={twitter} className="footer-icon" />
      <img src={instagram} className="footer-icon" />
      <img src={github} className="footer-icon" />
    </div>
  );
}

export default Footer;
