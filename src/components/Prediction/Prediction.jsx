import React,{useState} from "react";
import "./Prediction.css";
import Search from "./Prediction.png";
import Vector from "./Vector.png";
import { Link } from "react-router-dom";
import correct from "./correct.png"
import incorrect  from "./incorrect.png"
function Prediction() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const correctUrl = "https://www.google.com";
  const incorrectUrl = "https://www.example.com";

  const checkUrl = (e) => {
    e.preventDefault();
    if (url === correctUrl) {
      setResult("success");
    } else {
      setResult("unsuccessful");
    }
  };
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
            Try not to get <span className="dot">hacked.</span> So, get ensure.
          </h1>
        </div>
      </div>
      <div className="grid">
        <div>
          <p className="content">Check if</p>
          <p className="points">
            <img src={Vector} alt="vector" className="vector" /> Suspicious
            links or unexpected attachments <span className="dot">.</span>
          </p>
          <p className="points">
            <img src={Vector} alt="vector" className="vector" /> Spelling and
            bad grammar <span className="dot">.</span>
          </p>
          <p className="points">
            <img src={Vector} alt="vector" className="vector" /> First time or
            infrequent senders <span className="dot">.</span>
          </p>
        </div>
        <img src={Search} alt="img" className="img" />
      </div>
      <form>
        <p className="url">Enter URL</p>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          className="text"
          onChange={(e) => setUrl(e.target.value)}
        />
        <p className="url">From where did you get URL?</p>
        <input type="text" className="text" />
        <div>
          <button className="check" onClick={checkUrl}>Check</button>
        </div>
      </form>
      {result === "success" && (
        <div className="success">
          <img src={correct} alt="" className="correct" />
          <p className="img-text">This link is 92% safe to use.</p>
        </div>
      )}

      {result === "unsuccessful" && (
        <div className="unsuccessful">
          <img src={incorrect} alt="" className="correct" />
          <p className="img-text">This link is not safe to use.</p>
        </div>
      )}
    </>
  );
}

export default Prediction;
