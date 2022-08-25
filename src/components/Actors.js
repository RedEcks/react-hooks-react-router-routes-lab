import React from "react";
import { actors } from "../data";

let actorsPage = actors.map((actor)=>{
 return( 
 <div>
    <>{actor.name}</>
    <ul>
      {actor.movies.map((movie)=>
        <li>{movie}</li>
      )}
    </ul>
  </div>)
})

function Actors() {
  return (
  <div>
    <>Actors Page</>
    <>{actorsPage}</>
  </div>);
}

export default Actors;
