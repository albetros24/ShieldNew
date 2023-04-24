import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
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
                to="/"
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
              <p className="login-text"><Link
                  to="/login"
                  className="anchor-item-login"
                  alt="home-button"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Log In
                </Link></p>
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
        <div>
          <h1 className="heading1">
            <span className="dot">Our Mission</span>
          </h1>
          <h1 className="heading2">Security is our shared responsibility</h1>
        </div>
      </div>
      <div className="about">
        <h1 className="heading">
          Our Values<span className="dot">.</span>
        </h1>
        <div className="grid1">
          <div className="row1">
            <div className="contents1">
              <h2 className="head1">No bullshit.</h2>
              <p>
                We are honest and work with integrity. Transparency is essential
                at Shield, and we prefer to—ever respectfully—tell things as
                they are. When mistaken, we assume our responsibility, we learn,
                and we progress on.
              </p>
            </div>
            <div className="contents1">
              <h2 className="head1">Go beyond.</h2>
              <p>
                Challenge the status quo and try new things. Creativity and
                knowledge are at the core of innovation. Quality must trump
                quantity.
              </p>
            </div>
          </div>
          <div className="row1">
            <div className="contents1">
              <h2 className="head1">Create a positive impact.</h2>
              <p>
                The Shield experience seeks to be positive and unforgettable,
                both for our users and our team. We create value worldwide and
                make every effort to get involved locally and give back to our
                community.
              </p>
            </div>
            <div className="contents1">
              <h2 className="head1">Play as a team.</h2>
              <p>
                Success is built in a sincere yet respectful teamwork
                environment. Where each individual is called upon to contribute
                in their own way. Where each victory, whether great or small, is
                celebrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
