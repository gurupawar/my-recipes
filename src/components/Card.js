import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Card = ({ data }) => {
  const { mode } = useTheme();
  if (data.length === 0) {
    return <div className="erro_msg">No recipes to load...</div>;
  }
  return (
    <div className="card__wrapper">
      {data.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <span>{recipe.cookingTime}</span>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`} className="btn">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
