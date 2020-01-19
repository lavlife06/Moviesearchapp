import React, { useContext} from 'react'
import MoviesDisplay from './MoviesDisplay';
import MoviesContext from '../../context/movies/moviesContext';


const MoviesArray = () => {

  const movieContext = useContext(MoviesContext);
  const { titlearr,posterarr } = movieContext;
  
  return (
    <div className='moviecard'>
      { titlearr.map((item,index) => (<MoviesDisplay mtitle={item} key={index} mposter={posterarr[index]} />))}
    </div>
  )
}

export default MoviesArray;
