import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  const emailAddress = "nourom.professional@gmail.com";

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>I'll be happy to have a discussion with you :)</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>{emailAddress}</h5>
              <a href={`mailto:${emailAddress}`}>
                <h5>{emailAddress}</h5>
              </a>
              <h5>Rabat, Morocco</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
