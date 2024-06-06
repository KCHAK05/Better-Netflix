import React from "react";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import threads from "../../assets/threads.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={x} alt="" />
        <img src={threads} alt="" />
      </div>
      <div className="footer-info">
        <ul>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Legal Notices </li>
          <li>Help Center </li>
          <li>Account </li>
          <li>Media Center</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
          <li>Cookie</li>
          <li>Preferences</li>
          <li>Corporate Information</li>
          <li>Corporate Information</li>
        </ul>
        <p>1997-2024 Netflix,Inc.</p>
      </div>
    </div>
  );
};


export default Footer;
