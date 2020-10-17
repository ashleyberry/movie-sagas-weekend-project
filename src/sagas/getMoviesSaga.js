// import axios
import axios from "axios";
import { put } from 'redux-saga/effects';

// gets movies from database via router
function* getMoviesSaga( action ) {
    // console.log( 'made it into getMoviesSaga!' )
	let response = yield axios({
        method: 'GET',
        url: '/api/movie'
    });
	// console.log( 'getMoviesSaga response:', response.data );
	yield put({
	type: 'SET_MOVIES',
	payload: response.data
    })
    // console.log( 'these are our movies', response.data )
} // end getMoviesSaga

export default getMoviesSaga