import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/moviesdata/Search';
import MoviesState from './context/movies/moviesState';
import MoviesArray from './components/moviesdata/MoviesArray';
import Movieinfo from './components/moviesdata/MovieInfo';
import Notfound from './components/moviesdata/Notfound';

const  App = () => {
  return (
    <MoviesState>
     <Router>
        <div className="App">
              <Switch>
                <Route 
                  exact path='/' 
                  render={() => (
                  <Fragment>
                    <Navbar />
                    <Search />
                    <MoviesArray />
                  </Fragment>)}>
                </Route>
                <Route exact path='/movies/:title' component={Movieinfo} />
                <Route component={Notfound} />
              </Switch>
          </div>
      </Router>
    </MoviesState>
  );
}
 
export default App;
 //<i className="fab fa-react fa-5x" id="react-logo" />
// <i className="fa fa-search" /> Search for a movie ,TV series ..
// Here is your key: a57d267d
// http://www.omdbapi.com/?t=lost
// http://www.omdbapi.com/?apikey=[a57d267d]&t={text}
