import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const LoginPopup = ({ setShowLogin }) => {
  const { url, token
    
    , setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onCHangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  if (!url) {
    console.error("API URL is not defined.");
    return;
  }
  const onLogin = async (event) => {
    event.preventDefault();

    if (!url) {
      console.error("API URL is not defined.");
      return;
    }

    let newUrl;
    if (currState === "Login") {
      newUrl = "http://localhost:4000/api/user/login";
    } else {
      newUrl = "http://localhost:4000/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onCHangeHandler}
              value={data.name}
              placeholder="Your Name..."
              required
            />
          )}
          {/* <input type="text" placeholder="Your Name..." required /> */}
          <input
            name="email"
            onChange={onCHangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email..."
            required
          />
          <input
            name="password"
            onChange={onCHangeHandler}
            value={data.password}
            type="password"
            placeholder="Your Password..."
            required
          />
        </div>
        <button type="Submit">
          {currState === "Sign up" ? "create account" : "Login"}
        </button>
        <div className="login-popup-codition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currState == "Login" ? (
          <p>
            create a new account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Click here.</span>
          </p>
        ) : (
          <p>
            Already have a account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
