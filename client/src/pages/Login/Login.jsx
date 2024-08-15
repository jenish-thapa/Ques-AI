import React from "react";
import "./Login.css";

import quessAILogo1 from "../../assets/quessAILogo-white-withText.png";
import quessAILogo2 from "../../assets/quessAILogo-purple.png";
import { AlertBox } from "../../components/AlertBox";

const Login = () => {
  return (
    <div className="welcome-screen">
      <div className="welcome-message">
        <img src={quessAILogo1} alt="QuessAI Logo" className="welcome-logo" />
        <h1>
          Your podcast <br /> will no longer <br /> be just a hobby
        </h1>
        <p>
          Supercharge Your Distribution <br /> using our AI assistant!
        </p>
      </div>
      <div className="login">
        <img src={quessAILogo2} alt="QuessAI Logo" />
        <p>
          Welcome to <br /> <span className="bold">Ques.AI</span>
        </p>
        <form method="post">
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <input type="submit" value="Login" className="login-button" />
        </form>
      </div>
    </div>
  );
};

export default Login;
