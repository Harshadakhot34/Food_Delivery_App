import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi impedit quo eaque, alias, iure magni ipsum incidunt atque
            distinctio officia sed repellendus tempora. Amet dolor vero et fugit
            nobis?
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>COntact@harshada.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 test.good - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
