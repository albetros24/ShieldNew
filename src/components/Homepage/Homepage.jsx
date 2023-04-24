import React from "react";
import playbtn from "./play-button.png";
import "./Homepage.css";
import done from "./done.png";
import img1 from "./mid-1.png";
import task from "./task.png";
import admin from "./admin.png";
import feed from "./feed.png";
import { Link } from "react-router-dom";

{
  /* <Link to="/" className="black current" alt="home-button" onClick={()=>{window.scrollTo(0,0)}}>Home</Link> */
}
const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="logo-name">
            <h3 className="name">
              Shield<span className="dot">.</span>
            </h3>
          </div>
          <ul className="list">
            <li className="item">
              <Link
                to="/"
                className="anchor-item"
                alt="home-button"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li className="item">
              <Link
                to="/news"
                className="anchor-item"
                alt="home-button"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                News
              </Link>
            </li>
            <li className="item">
              <Link
                to="/about"
                className="anchor-item"
                alt="home-button"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                About Us
              </Link>
            </li>
            <li className="item">
              <Link
                to="/faq"
                className="anchor-item"
                alt="home-button"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                FAQs
              </Link>
            </li>

            <li className="item">
              <Link
                to="/h"
                className="anchor-item"
                alt="home-button"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="end-nav">
            <div className="login nav-btn">
              <p className="login-text">
              <Link
                  to="/login"
                  className="anchor-item-login"
                  alt="home-button"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Log In
                </Link>
                </p>
            </div>
            <div className="try nav-btn">
              <p className="try-text">
                <Link
                  to="/prediction"
                  className="anchor-item"
                  alt="home-button"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Try It
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="below-nav-1">
          <div className="left-below-nav">
            <div className="pt-1">
              Guard your privacy and your peace of mind.
            </div>
            <div className="pt-2">
              <div className="play-container">
                <img src={playbtn} alt="" className="play-button" />
                <div className="play-text">Watch Video</div>
              </div>
            </div>
          </div>
          <div className="right-below-nav">
            <div className="sec-1">
              <img src={done} alt="" className="tick-img" />
              <div className="sec-1-content">
                Result prediction with above{" "}
                <span className="dot">90% accuracy</span>
              </div>
            </div>
            <div className="sec-2">
              <img src={done} alt="" className="tick-img" />
              <div className="sec-2-content">
                Get latest <span className="dot">news</span>
              </div>
            </div>
            <div className="sec-3">
              <img src={done} alt="" className="tick-img" />
              <div className="sec-3-content">
                <span className="dot">Safeguard</span> user from phishing attack
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="mid-head">Why to check link?</div>
        <div className="mid-upper">
          <div className="mid-upper-left">
            <div className="mid-upper-left-sec1">
              <div className="mid-upper-left-head head-sec1">
                Urgent call to action or threats <span className="dot">.</span>
              </div>
              <div className="mid-upper-left-body body-sec1">
                Be suspicious of emails that claim you must click, call, or open
                an attachment immediately.
              </div>
            </div>
            <div className="mid-upper-left-sec1">
              <div className="mid-upper-left-head head-sec2">
                Spelling and bad grammar <span className="dot">.</span>
              </div>
              <div className="mid-upper-left-body body-sec2">
                Professional companies and organizations usually have an
                editorial staff to make sure customers get high-quality,
                professional content.
              </div>
            </div>
          </div>
          <div className="mid-upper-right">
            <img src={img1} alt="" className="img1" />
          </div>
        </div>

        <div className="mid-upper">
          <div className="mid-upper-right mid-pt2">
            <img src={img1} alt="" className="img1" />
          </div>
          <div className="mid-upper-left mid-left-pt2">
            <div className="mid-upper-left-sec1">
              <div className="mid-upper-left-head low-head-sec1">
                Suspicious links or unexpected attachments{" "}
                <span className="dot">.</span>
              </div>
              <div className="mid-upper-left-body low-body-sec1">
                If you suspect that an email message is a scam, don't open any
                links or attachments that you see.
              </div>
            </div>
            <div className="mid-upper-left-sec1">
              <div className="mid-upper-left-head low-head-sec2">
                First time or infrequent senders <span className="dot">.</span>
              </div>
              <div className="mid-upper-left-body low-body-sec2">
                While it's not unusual to receive an email from someone for the
                first time, especially if they are outside your organization,
                this can be a sign of phishing.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="glance">
        <div className="glance-head">Shield at a glance</div>
        <div className="glance-row">
          <div className="section-1">
            <div className="section-1-img">
              <img src={task} alt="" />
            </div>
            <div className="section-1-tag">Quality Check</div>
          </div>
          <div className="section-2">
            <div className="section-2-img">
              <img src={feed} alt="" />
            </div>
            <div className="section-1-tag">Remain Updated</div>
          </div>
          <div className="section-3">
            <div className="section-3-img">
              <img src={admin} alt="" />
            </div>
            <div className="section-1-tag">Protect Yourself</div>
          </div>
        </div>
        <div className="glance-button">
          <div className="glance-text">Try It Free Now</div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
