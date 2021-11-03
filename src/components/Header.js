import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <Link className="logo" to="/">
            <img src="./images/cooking-pot.svg" alt="" />
          </Link>
          <Link className="btn" to="/create">
            Create Recipe
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
