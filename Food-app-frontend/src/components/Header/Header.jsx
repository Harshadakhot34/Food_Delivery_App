import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2> Crave It? Grab It! </h2>
        <p>
          Welcome to a feast for your taste buds! Dive into a wild menu packed
          with bold flavors, sizzling dishes, and mouth-watering creations. From
          the first bite to the last crumb, we serve happiness on a plate.
        </p>
        {/* <button>🥘 Your Cravings, Our Creations</button> */}
        <button> Our Creations</button>
      </div>
    </div>
  );
};

export default Header;
