import "./Contact.scss";
import me from "../../assets/images/me.png";
import linkIn from "../../assets/images/linkedin.png";

import React from "react";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-image">
        <img id="image" src={me} alt="me" />
      </div>

      <div className="contact-profile">
        <p>
          Throughout university and previous job roles, I have always gravitated
          towards, Innovation, technology and problem solving.
          <br />
          Thankfully I have been able to explore all in an abundance during the
          _nology programming course, where I have developed the skills to
          become a valuable full-stack software engineer.{" "}
          <a
            href="https://www.linkedin.com/in/cameron-hyden-730669116/"
            target="blank"
          >
            <img className="icon" src={linkIn} alt="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
