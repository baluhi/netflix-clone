import './tvshowcard.css'
import {useState} from 'react';
import { tvShows} from "../../Data/Data.json";

const TvShowsCard = () => {

    const [shows] = useState(tvShows)
  return (
  <>
   <div className="container">
        <h3 className="text-light  ms-4">Latest Tv Shows</h3>
        <div className="container-fluid mt-4">
          {shows.map((show, index) => {
            return (
              <div className="card show-card bg-dark  text-light" key={index}>
                <div className="card-header bg-dark   text-light">
                  <h5 className="card-title">{show.title}</h5>
                </div>
                <div className="card-body text-light">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="card-img-top"
                  />
                  <p className="card-text text-light">{show.description}</p>
                  <div className="card-details">
                    <span className="release-year">{show.year}</span>
                   
                    <span className="rating">{show.rating}</span>
                  
                  </div>
                  <span > {show.genre}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  
  </>
  )
}
export default TvShowsCard