import React from "react";
import { movies } from "../data";

function Movies() {

  let newmovies = movies.map((movie)=>{
    return(
      <div>
      <>{movie.title}</>
      <>{movie.time}</>
        <ul>{
          movie.genres.map((genre)=>
          <li>{genre}</li>)}
        </ul>
    </div>)
  })


  return (
  <div>
    <>Movies Page</>
    <>{newmovies}</>
  </div>
  );

}

export default Movies;
