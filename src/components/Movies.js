import React from 'react';
import { movies } from '../data';
import Movie from './Movie'
const Movies = () => { 
  
  
  return ( 
    <span> 
      <h1>Movies Page</h1>
  { movies.map(mov => <div><p>{mov.title}</p><p>{mov.time}</p><ul>{mov.genres.map(gen => <li>{gen}</li>)}</ul></div>) }
    </span>
  );
};

export default Movies;
