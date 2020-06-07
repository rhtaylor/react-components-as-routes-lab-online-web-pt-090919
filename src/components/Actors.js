import React from 'react';
import { actors } from '../data'; 
import Actor from './Actor'



const Actors = (data) => {   
  
  return (
    <div> 
      <h1>Actors Page</h1>
  { actors.map(actor =><div className="actor"><h1>{actor.name}</h1><ul>{actor.movies.map(movie=><li>{movie}</li>)}</ul></div> )}
    </div>
  );
};

export default Actors;
