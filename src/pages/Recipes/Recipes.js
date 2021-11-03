import React from "react";
import { useParams } from "react-router-dom";
import "./Recipes.css";
import { useFetch } from "../../hooks/useFetch";

const Recipes = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/recipes/" + id;
  const { data, error, isPending } = useFetch(url);
  return (
    <div className="container">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="recipe">
          <h1>{data.title}</h1>
          <span className="time">{data.cookingTime}</span>
          <div>
            Ingredients:
            {data.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </div>
          <p>{data.method}</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
