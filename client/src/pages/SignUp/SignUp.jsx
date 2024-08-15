import React, { useState } from "react";
import "./SignUp.css";

import quessAILogo1 from "../../assets/quessAILogo-white-withText.png";
import quessAILogo2 from "../../assets/quessAILogo-purple.png";
import { RegisterUser } from "../../calls/user";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usrname, setUsrname] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const values = { email, password, usrname };
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        console.log("Successfully signed up!!!");
      } else console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="usrname"
              placeholder="Username"
              value={usrname}
              onChange={(e) => setUsrname(e.target.value)}
              required
            />
          </div>
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
          <input type="submit" value="SignUp" className="login-button" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
