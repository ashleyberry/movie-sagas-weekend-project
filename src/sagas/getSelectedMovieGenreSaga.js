// import axios
import axios from "axios";
import { put } from 'redux-saga/effects';

// gets selected movie's genre from database via the router
function* getSelectedMovieGenreSaga( action ) {
    // console.log( 'made it into getSelectedMovieGenreSaga!', action.payload )
    let response = yield axios({
        method: 'GET',
        url: `/api/genre/${ action.payload.movieId }`
    });
	// console.log( 'getSelectedMovieGenreSaga response:', response.data );
	yield put({
        type: 'SET_GENRE',
        payload: response.data
        })
    // console.log( 'these are our details', response.data )
} // end getSelectedMovieGenreSaga

export default getSelectedMovieGenreSaga