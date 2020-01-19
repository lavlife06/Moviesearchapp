import React  from 'react';
import { Link } from 'react-router-dom';

const MoviesDisplay = ({mtitle,mposter}) => {
  return (
    <div className='card text-centre' >
      <Link to={`/movies/:${mtitle}`} >
      <img src={mposter} alt="" style=
      {{ width: "150px",height: "200px"}} />
      </Link>
      <h1 className='text-centre' >{mtitle}</h1>
    </div>
  )
}

export default MoviesDisplay
