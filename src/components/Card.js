import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import deleteIcon from "../assets/deleteIcon.svg";
import { useTheme } from "../hooks/useTheme";
import { ProjectFirestore } from "../firebase/config";

const Card = ({ data }) => {
  const { mode } = useTheme();
  if (data.length === 0) {
    return <div className="erro_msg">No recipes to load...</div>;
  }
  const handleDelete = (id) => {
    ProjectFirestore.collection("recipes").doc(id).delete();
  };
  return (
    <div className="card__wrapper">
      {data.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <img
            onClick={() => handleDelete(recipe.id)}
            className="deleteIcon"
            src={deleteIcon}
            alt="dsad"
          />
          <h3>{recipe.title}</h3>
          <span>{recipe.cookingTime}</span>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`} className="btn-secondary">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
