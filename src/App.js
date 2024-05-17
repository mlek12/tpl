import React, { useEffect, useState } from "react";
import "./styles.css";
import Movie from "./Movie";

const App = () => {
  const [data, setData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d15fdb70efc0e591a41824bd8d00bdea&language=en-US&page=1";

  const fetchData = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setData(movies.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="lists">
        {data.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;
