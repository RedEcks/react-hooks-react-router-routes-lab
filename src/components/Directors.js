import React from "react";
import { directors } from "../data";

let directorsPage = directors.map((director)=>{
  return(
    <div>
      <>{director.name}</>
      <ul>
        {director.movies.map((movie)=>
        <li>{movie}</li>)}
      </ul>
    </div>
  )
})

function Directors() {
  return (<div>
        <>Directors Page</>
        <>{directorsPage}</>
      </div>);
}

export default Directors;
