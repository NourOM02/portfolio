import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMedium } from "react-icons/fa";

const HeaderSocials = () => {
  const iconSize = 20;
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nour-oulad-moussa-678882190/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={iconSize}/>
      </a>
      <a
        href="https://github.com/NourOM02"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={iconSize}/>
      </a>
      <a
        href="https://medium.com/@nour.oulad.moussa"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium size={iconSize}/>
      </a>
    </div>
  );
};

export default HeaderSocials;
