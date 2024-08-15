import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import quessAILogo1 from "../../assets/quessAILogo-white-withText.png";
import quessAILogo2 from "../../assets/quessAILogo-purple.png";
import { AlertBox } from "../../components/AlertBox";
import { LogInUser } from "../../calls/user";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 1300);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const values = { email, password };
    try {
      const response = await LogInUser(values);
      if (response.success) {
        setAlert({ message: response.message, type: "success" });
        setTimeout(() => {
          navigate("/home");
        }, 1300);
      } else {
        setAlert({ message: response.message, type: "error" });
      }
    } catch (error) {
      setAlert({
        message: error.message || "An error occurred",
        type: "error",
      });
    }
  };

  return (
    <div className="welcome-screen">
      {alert && <AlertBox message={alert.message} type={alert.type} />}
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
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="LogIn" className="login-button" />
        </form>
      </div>
    </div>
  );
};

export default Login;
