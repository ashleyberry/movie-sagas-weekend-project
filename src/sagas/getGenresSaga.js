// import axios
import axios from "axios";
import { put } from 'redux-saga/effects';

// gets the genres via the router
function* getGenresSaga( action ) {
    console.log( 'made it into getGenresSaga!', action.payload );
    let response = yield axios({
        method: 'GET',
        url: '/api/genre'
    });
    console.log( 'getGenresSaga response:', response.data );
    // setting our genres reducer with response
	yield put({
	type: 'SET_GENRES',
	payload: response.data
    })
    console.log( 'these are our genres', response.data )
} // end getGenresSaga

export default getGenresSaga