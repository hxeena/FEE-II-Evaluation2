import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [action, setAction] = useState("Log-in");
  const [showZoomIn, setShowZoomIn] = useState(false);

  const toggleAction = () => {
    setAction(prevAction => prevAction === "Log-in" ? "Sign up" : "Log-in");
    setShowZoomIn(true); // Set showZoomIn to true to trigger the zoom-in effect
  };

  return (
    <div className="full">
    <div className="cont">
      
      <div className="contain">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Log-in" ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="text" placeholder="Name" required />
            </div>
          )}
          <div className="input">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" required />
          </div>
        </div>
        {action === "Sign up" ? (
          <div></div>
        ) : (
          <div className="forgot">
            Forgot password? <span>Click Here</span>{" "}
          </div>
        )}
        <div className="submit-contain">
          <div
            className={action === "Log-in" ? "submit gray" : "submit"}
            onClick={toggleAction}
          >
            Sign up
          </div>
          <div
            className={action === "Sign up" ? "submit gray" : "submit"}
            onClick={toggleAction}
          >
            <Link to="/">Log-in</Link>
          </div>
        </div>
      </div>
      
    </div></div>
  );
};

export default Login;
