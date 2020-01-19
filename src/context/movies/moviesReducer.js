import {
  SEARCH_MOVIES,
  DETAIL_HANDLER
} from '../types';

 const MoviesReducer = (state, action) => {
   switch(action.type){
     case SEARCH_MOVIES:
       return {
         ...state,
         titlearr: action.payload.titlearr,
         posterarr: action.payload.posterarr
       };
      case DETAIL_HANDLER:
        return{
          ...state,
          moviedetail: action.payload.moviedetail,
          imdbrate: action.payload.imdbrate,
          rtrate: action.payload.rtrate
        }
     default:
       return state;
   }
 }

export default MoviesReducer;
