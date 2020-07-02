import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <p>RyanPDesigns</p>
          <p>ryanpdesigns@gmail.com</p>
          <p>
            7808 W Waterford
            <br />
            Sioux Falls, SD 57106
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            <a href="http://www.github.com/etriz">/etriz</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="http://www.linkedin.com/ryanpdesigns">/ryanpdesigns</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faTwitter} />
            <a href="http://www.twitter.com/ryanpdesigns">/ryanpdesigns</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} />
            <a href="http://www.instagram.com/ryanpdesigns">/ryanpdesigns</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
