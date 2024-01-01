import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>yadavvishalyadav718@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/vishu_all_8578/" target="_blank" rel="noopener noreferrer">
        <Insta color="white" size={"3rem"} />
    </a>
    <a href="https://www.facebook.com/people/Vishal-Yadav/pfbid021YqnahD7skWLEpXr5AH38s4GUgA7ncWCcPWvwn7yUjsESKvd6ufwa51FJDn3EYUol/?ref=xav_ig_profile_web" target="_blank" rel="noopener noreferrer">
        <Facebook color="white" size={"3rem"} />
    </a>
    <a href="https://github.com/Vishalyadav9026" target="_blank" rel="noopener noreferrer">
        <Gitub color="white" size={"3rem"} />
    </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
