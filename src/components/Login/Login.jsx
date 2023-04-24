import React from "react";
import "./Login.css";
import google from "./Google.png";
import facebook from "./Facebook.svg";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <div className="logo-name">
            <h3 className="name">
              Shield<span className="dot">.</span>
            </h3>
          </div>
          <div className="pt-1">
            Guard your <span className="dot">privacy</span> and your peace of
            mind.
          </div>
        </div>
        <div className="login-right">
          <div className="login-right-container">
            <div className="login-heading">Sign in to your account</div>
            <div className="login-subtext">
              Don’t have an account?{" "}
              <a href="/ /" className="signup-text">
                Sign up
              </a>
            </div>
            <fieldset className="fieldset email-fieldset">
              <legend>Email</legend>
              <input type="text" className="fieldset-input" />
            </fieldset>
            <fieldset className="fieldset email-fieldset">
              <legend>Password</legend>
              <input type="text" className="fieldset-input" />
            </fieldset>
            <div className="signin-button">
              <div className="signin-text">Sign In</div>
            </div>
            <div className="aux-text">or sign in with</div>
            <div className="icons-login">
              <div className="google-login">
                <img src={google} alt="" />
              </div>
              <div className="facebook-login">
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
