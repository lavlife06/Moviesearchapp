import React, { useContext, useEffect} from 'react'
import MoviesContext from '../../context/movies/moviesContext';
import { Link } from 'react-router-dom';

const MovieInfo = ({match}) => {

  const movieContext = useContext(MoviesContext);
  const { DetailHandler, moviedetail, imdbrate, rtrate } = movieContext;
  const { Actors, Runtime, Released, Title, Genre, Plot, Poster, Type, Boxoffice } = moviedetail;

  useEffect(() => {
    console.log(match.params.title)
    DetailHandler(match.params.title)
    // eslint-disable-next-line
  }, [])
  // console.log(Ratings)
  return (
    <div className='movieinfocontainer' >
      <div className="title">{Title}</div>
      <div className="poster"><img className='posterimg' src={Poster} alt="poster"/></div>
      <div className="actors">Actors:{Actors}</div>
      <div className="release">Released:{Released}</div>
      <div className="duration">Duration:{Runtime}</div>
      <div className="type">Type:{Type}</div>
      <div className="genre">Genre:{Genre}</div>
      <div className="ratingimdb">IMDB:{imdbrate}</div>
      <div className="ratingrt">Rotten Tomatoes:{rtrate}</div>
      <div className="boxoffice">Boxoffice:{Boxoffice}</div>
      <div className="plot">Description:{Plot}</div>
      <div className="b2search"><Link to={'/'} >Back To Search</Link></div>
    </div>
  )
}

export default MovieInfo

// rafce for arrow function with default export