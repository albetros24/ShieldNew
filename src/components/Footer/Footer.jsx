import React from "react";
import "./Footer.css";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import telegram from "./telegram.png";
import instagram from "./instagram.png";
import fb2 from "./Vector.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col1">
          <div className="logo-name">
            <h3 className="name">
              Shield<span className="dot">.</span>
            </h3>
          </div>
          <div className="inside">Inside Shield</div>
          <div className="inside-content">
            <div className="inside-text">Home</div>
            <div className="inside-text">News</div>
            <div className="inside-text">Try It Free</div>
            <div className="inside-text">About Us</div>
          </div>
        </div>
        <div className="col2">
          <div className="inside customer">Customer Care</div>
          <div className="inside-content customer-content">
            <div className="inside-text">FAQs</div>
            <div className="inside-text">Terms of Service</div>
            <div className="inside-text">Privacy Policy</div>
          </div>
        </div>
        <div className="col3">
          <div className="ask-head">Ask Question</div>
          <div className="search">
            <input type="text" className="ask-search" />
            <div className="try nav-btn">
              <p className="try-text">Send</p>
            </div>
          </div>
          <div className="icons">
            <img src={facebook} alt="" />
            <img src={fb2} alt="" className="fb icon" />
            <div className="icons-2">
              <img src={linkedin} alt="" className="icon" />
              <img src={telegram} alt="" className="icon" />
              <img src={instagram} alt="" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
