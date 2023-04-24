import React from "react";
import "./News.css";
import r1 from "./Rectangle 18.png";
import r2 from "./Rectangle 19.png";
import r3 from "./Rectangle 20.png";
import r4 from "./Rectangle 21.png";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "Cryptocurrency phishing scams have grown by 40% in a year",
    content:
      "In 2022, cryptocurrency phishing rose significantly and was included as a separate category, demonstrating 40% YoY growth with 5,040,520 detections of crypto phishing in 2022 compared to 3,596,437 in 2021.",
    link: "http://timesofindia.indiatimes.com/articleshow/99277591.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
    image: r1,
  },
  {
    id: 2,
    title:
      "Netflix scam: Why you should not respond to email asking for payment details and how to stay safe",
    content:
      "Cybersecurity is a growing issue of concern among internet users. Criminals are finding new ways to target vulnerable citizens. If you are a Netflix user, then here’s something you should know. According to a report, a team of researchers have detected a cyber attack in which hackers try to steal payment information of users.",
    link: "https://www.livemint.com/news/netflix-scam-why-you-should-not-respond-to-email-asking-for-payment-details-and-how-to-stay-safe-11682141066743.html",
    image: r2,
  },
  {
    id: 3,
    title:
      "'Fraud' KYC Updation, Phishing Links Among Topmost Tricks Used By Fraudsters From Jamtara",
    content:
      "'Fraud' KYC updation, impersonating bank employees, and sending phishing links are among the topmost tricks employed by fraudsters from Jharkhand's Jamtara to cheat people across the country, according to police in New Delhi.",
    link: "https://www.outlookindia.com/national/-fraud-kyc-updation-phishing-links-among-topmost-tricks-used-by-fraudsters-from-jamtara-police-news-280053",
    image: r3,
  },
  {
    id: 4,
    title: "Want 4G to 5G SIM upgrade? Beware of frauds, warn Jharkhand Police",
    content:
      "Police have warned against 4G and 5G SIM upgradation phishing scams in the state . They have appealed to the public not to share one-time passwords(OTPs) and other sensitive information with strangers who may contact on the pretext of offering an upgrade.",
    link: "http://timesofindia.indiatimes.com/articleshow/99253916.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cpp",
    image: r4,
  },
];
function news() {
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
          <h1 className="centralHeading-p1">Latest news</h1>
          <h1 className="centralHeading-p2">
            related to <span className="dot">Phishing</span>
          </h1>
        </div>
        <div className="p2">
          <h3>This Week</h3>
          <h3>This Month</h3>
        </div>
      </div>
      {data.map((item) => (
        <section className="news">
          <h3 className="newsTitle">{item.title}</h3>
          {
            <section className="newsParts">
              <img src={item.image} alt="ni" className="newsImg" />
              <div>
                <p className="newsText">{item.content}</p>
                <a href={item.link} className="newsLink">
                  See More
                </a>
              </div>
            </section>
          }
        </section>
      ))}
    </>
  );
}

export default news;
