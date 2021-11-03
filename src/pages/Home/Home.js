import React from "react";
import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {
  const { data, error, isPending } = useFetch("http://localhost:8000/recipes");
  return (
    <div className="home container">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <Card data={data} />}
    </div>
  );
};

export default Home;
