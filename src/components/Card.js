import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <span>{recipe.cookingTime}</span>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`} className="btn">
            Read more
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
