import React, { useState, useRef, useEffect } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngrdients, setNewIngrdients] = useState("");
  const [ingrdients, setIngrdients] = useState([]);
  const ingrdientInput = useRef(null);
  const { mode } = useTheme();

  const history = useHistory();

  const { postData, data, error } = useFetch(
    "http://localhost:8000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients: ingrdients,
    });
  };

  const addIngrdient = (e) => {
    e.preventDefault();
    const ings = newIngrdients.trim();

    if (ings && !ingrdients.includes(ings)) {
      setIngrdients((preIngrdients) => [...preIngrdients, ings]);
    }
    setNewIngrdients("");
    ingrdientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);
  return (
    <div className="container">
      <div className={`crate ${mode}`}>
        <h2>Create new recipe :- </h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Title :</span>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span>Ingredients :</span>
            <div className="ingrdients">
              <div className="flex-group">
                <input
                  type="text"
                  value={newIngrdients}
                  ref={ingrdientInput}
                  onChange={(e) => setNewIngrdients(e.target.value)}
                />
                <div>
                  <button className="btn ingr-btn" onClick={addIngrdient}>
                    Add
                  </button>
                </div>
              </div>
              {
                <span className="ingr-list">
                  {ingrdients &&
                    ingrdients.map((ing) => <li key={ing.id}> {ing},</li>)}
                </span>
              }
            </div>
          </label>
          <label>
            <span>
              Method :
              <textarea
                value={method}
                required
                onChange={(e) => setMethod(e.target.value)}
              ></textarea>
            </span>
          </label>
          <label>
            <span>Time :</span>
            <input
              type="number"
              value={cookingTime}
              required
              onChange={(e) => setCookingTime(e.target.value)}
            />
          </label>
          <button className="btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
