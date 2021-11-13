import React from "react";
import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";
import sunIcon from "../assets/sun.svg";
const themeColor = ["#f25f4c", "#6246ea", "#00ebc7"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  console.log(mode);
  return (
    <div className="theme_selector container">
      <div className="changeMode">
        <img
          onClick={toggleMode}
          src={sunIcon}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          alt="sun"
        />
      </div>
      <div className="theme_btn">
        {themeColor.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
