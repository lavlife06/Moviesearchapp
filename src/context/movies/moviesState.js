import React, { useReducer } from 'react';
import MoviesReducer from './moviesReducer';
import MoviesContext from './moviesContext';
import {
  SEARCH_MOVIES,
  DETAIL_HANDLER
} from '../types';

//useReducer is an alternative to useState.

const MoviesState = (props) => {
  const initialState = {
    titlearr: [],
    posterarr: [],
    moviedetail: {},
    imdbrate: '',
    rtrate: ''
  }
  const [state, dispatch] = useReducer(MoviesReducer, initialState);
  const  api_key = 'a57d267d';

  // Search Movies
  const searchMovies = async (text) => {
    let resinfo = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${text}`);
    let data = await resinfo.json();
    let deepdata = await data.Search;
    deepdata.forEach((item,index) => {
      state.titlearr.push(item['Title']);
      state.posterarr.push(item['Poster']);
     })
    dispatch({
      type: SEARCH_MOVIES,
      payload: {titlearr: state.titlearr, posterarr: state.posterarr }
    });
  };

  // Search about more details of the selected movie
  const DetailHandler = async (title) => {
    let exactresinfo = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&t=${title}`);
    let exactdata = await exactresinfo.json();
    let imdbrate = exactdata['Ratings'][0]['Value'];
    let rtrate = exactdata['Ratings'][1]['Value'];
    dispatch({
      type: DETAIL_HANDLER,
      payload: {moviedetail: exactdata, imdbrate: imdbrate, rtrate: rtrate}
    })
  }

  return (<MoviesContext.Provider
    value={{
      titlearr: state.titlearr,
      posterarr: state.posterarr,
      moviedetail: state.moviedetail,
      imdbrate: state.imdbrate,
      rtrate: state.rtrate,
      searchMovies,
      DetailHandler
    }}
  >
    {props.children}
  </MoviesContext.Provider>)
}


export default MoviesState;

