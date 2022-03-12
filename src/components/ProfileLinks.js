import React from "react";
import mailIcon from "../images/Mail Icon.png";
import linkedinIcon from "../images/Linkedin Icon.png";

function ProfileLinks() {
  return (
    <div className="profile-link-cont">
      <h1 className="user-name">Alabhya Jindal</h1>
      <h2 className="user-profession">Frontend Developer</h2>
      <a href="https://alabhyajindal.com/" className="user-website">
        alabhyajindal.com
      </a>
      <div className="social-buttons-cont">
        <a
          href="mailto:alabhya10@gmail.com"
          className="social-button mail-button"
        >
          <img src={mailIcon} className="social-icon" />
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/alabhyajindal/"
          className="social-button linkedin-button"
        >
          <img src={linkedinIcon} className="social-icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ProfileLinks;
