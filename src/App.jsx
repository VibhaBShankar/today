import React, { useEffect, useState } from "react";
import "./App.css";

import { getPosts } from "./services/api";

import Card from "./components/Card";
import Loader from "./components/Loader";

function App() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError("Failed to fetch data");

        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(
      (item) => item.id !== id
    );

    setPosts(updatedPosts);
  };

  const filteredPosts = posts.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container">
      <h1 className="heading">
        Axios API Project
      </h1>

      <input
        type="text"
        placeholder="Search posts..."
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filteredPosts.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;