// import axios
import axios from "axios";
import { put } from 'redux-saga/effects';

// gets the selected movie's details via the router
function* getSelectedMovieDetailsSaga( action ) {
    console.log( 'made it into getSelectedMovieDetailsSaga!', action.payload );
    let response = yield axios({
        method: 'GET',
        url: `/api/movie/${ action.payload.movieId }`
    });
    // console.log( 'getSelectedMovieDetailsSaga response:', response.data );
    // setting our reducer with response
	yield put({
        type: 'SET_MOVIE',
        payload: response.data
    })
    // console.log( 'these are our selected movie details', response.data )
} // end getSelectedMovieDetailsSaga

export default getSelectedMovieDetailsSaga