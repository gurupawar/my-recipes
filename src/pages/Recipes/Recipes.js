import React from "react";
import { useParams } from "react-router-dom";
import "./Recipes.css";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

const Recipes = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/recipes/" + id;
  const { data, error, isPending } = useFetch(url);
  const { mode } = useTheme();
  return (
    <div className="container">
      {isPending && <div id="loader"></div>}
      {error && <div>{error}</div>}
      {data && (
        <div className={`recipe ${mode}`}>
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
