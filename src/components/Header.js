import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBox from "./SearchBox";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { mode } = useTheme();

  return (
    <header className={`header ${mode}`}>
      <div className="container">
        <div className="nav">
          <Link className="logo" to="/">
            <img src="./images/cooking-pot.svg" alt="" />
          </Link>
          <SearchBox />
          <Link className="btn" to="/create">
            Create Recipe
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
