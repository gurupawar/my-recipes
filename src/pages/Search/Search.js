import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:8000/recipes?q=" + query;

  const { data, error, isPending } = useFetch(url);

  console.log(data && data);
  return (
    <div className="container">
      <h2 className="home_title">Recipes includings "{query}"</h2>
      {error && <div>{error}</div>}
      {isPending && <div id="loader"></div>}
      <div className="search_result">{data && <Card data={data} />}</div>
    </div>
  );
};

export default Search;
