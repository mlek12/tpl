import React from "react";
const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <hr></hr><hr></hr>

    </div>
  );
};

export default Movie;
