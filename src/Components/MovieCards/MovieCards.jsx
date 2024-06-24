import "./moviecards.css";
import { data } from "../../Data/Data.json";
import  React ,{ useState } from "react";

const MovieCards = () => {

  const [movies] = useState(data);

  return (
    <>
      <div className="container">
        <h3 className="text-light  ms-4">Latest Movies</h3>
        <div className="container-fluid mt-4">
          {movies.map((movie, index) => {
            return (
              <div className="card movie-card bg-dark  text-light" key={index}>
                <div className="card-header bg-dark   text-light">
                  <h5 className="card-title">{movie.title}</h5>
                </div>
                <div className="card-body text-light">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="card-img-top"
                  />
                  <p className="card-text text-light">{movie.description}</p>
                  <div className="card-details">
                    <span className="release-year">{movie.year}</span>
                    <span className="rating">{movie.rating}</span>
                  </div>
                  <span>{movie.genre}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieCards;
