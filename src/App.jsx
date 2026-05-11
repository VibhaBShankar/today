import React, { useEffect, useState } from "react";

import "./App.css";

import { getPosts } from "./api";

import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);

        setLoading(false);
      })

      .catch((error) => {
        console.log(error);

        setError("Error fetching data");

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container">
      <h1>API Posts</h1>

      {posts.slice(0, 6).map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            body={item.body}
          />
        );
      })}
    </div>
  );
}

export default App;