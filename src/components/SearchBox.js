import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./SearchBox.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const { mode } = useTheme();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
    setTerm("");
  };

  return (
    <div className={`search ${mode}`}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        <img className="search-icon" src="./images/bx-search.svg" alt="" />
      </form>
    </div>
  );
};

export default Search;
