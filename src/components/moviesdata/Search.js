import React, { useState, useContext } from 'react';
import MoviesContext from '../../context/movies/moviesContext';

const Search = () =>  {

  const [text, settext] = useState('')
 
  const movieContext = useContext(MoviesContext)
  const submitHandler = (e) => {
    e.preventDefault();  
    movieContext.searchMovies(text);
    settext('')
  }
  //  console.log(`p:${Object.keys(movieContext.movies)}`)
  // console.log(`ll${typeof movieContext.movies}`)
  return (
    <div className='searchdiv'>
      <h1 className="searchdivh1"><i className="fa fa-search icontag" /> Search for a movie ,TV series ..</h1>
      <form className="searchform" onSubmit={submitHandler} >
      {/* <form className="x" onSubmit={this.submitHandler.bind(this)} >  */}
        <input type="text" name="text" placeholder="Search Movies,TV Series ..." className='searchinput' value={text} onChange={(e) => settext( e.target.value )}  />
        <input type="submit" value="Search" className="searchbutton" />
      </form>
    </div>
  )
};

export default Search; 
