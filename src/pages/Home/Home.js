import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
// import { useFetch } from "../../hooks/useFetch";
import { ProjectFirestore } from "../../firebase/config";

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unSub = ProjectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("no recipes to load...");
          setIsPending(true);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err);
        isPending(false);
      }
    );

    return () => unSub();
  }, []);

  return (
    <div className="home container">
      {isPending && <div id="loader"></div>}
      {error && <div>{error}</div>}
      {data && <Card data={data} />}
    </div>
  );
};

export default Home;
