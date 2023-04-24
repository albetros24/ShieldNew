import React from "react";
import "./Faq.css";
import Banner from "./Banner/Banner";
import questions from "./data.js";
import { Link } from "react-router-dom";
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

        <div className="centralHeading">
          <h1 className="centralHeading-p1">
            <span className="dot">FAQ! need help?</span>
          </h1>
          <h1 className="centralHeading-p2">We are here to help you .</h1>
        </div>
      </div>
      <Banner>
        {questions.map((question) => (
          <Banner.Entity key={question.key} className="answer">
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>
              <div>{question.answer}</div>
            </Banner.Text>
          </Banner.Entity>
        ))}
      </Banner>
    </>
  );
};

export default Homepage;
