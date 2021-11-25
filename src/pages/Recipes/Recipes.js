import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipes.css";
import { useTheme } from "../../hooks/useTheme";
import { ProjectFirestore } from "../../firebase/config";

const Recipes = () => {
  const { id } = useParams();
  const { mode } = useTheme();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unSub = ProjectFirestore.collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setData(doc.data());
        } else {
          setIsPending(false);
          setError("Could not found recipe...");
        }
      });

    return () => unSub();
  }, [id]);

  const handleUpdate = () => {
    ProjectFirestore.collection("recipes").doc(id).update({
      title: "hehe.........",
    });
  };
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
          <button
            onClick={() => handleUpdate()}
            className="btn-secondary btn-update"
          >
            update
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipes;
