import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [menu, setMeu] = useState("home");
  return (
    <div>
      <div className="navbar">
        <img src={assets.food} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <Link to="/" onClick={()=>{setMeu("home")}} className={menu === "home" ? "active" : ""}>home</Link>
          <a href="#explore-menu" onClick={()=>{setMeu("menu")}} className={menu === "menu" ? "active" : ""}>menu</a>
          <a href="#app-download" onClick={()=>{setMeu("mobile-app")}} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
          <a href="#footer" onClick={()=>{setMeu("contact-us")}} className={menu === "contact-us" ? "active" : ""}>contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button onClick ={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
