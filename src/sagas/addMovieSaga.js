// import axios
import axios from "axios";
import { put } from 'redux-saga/effects';

// adding a movie to the database
function* addMovieSaga( action ) {
    // console.log( 'made it into addMovie!' );
    yield axios({
        method: 'POST',
        url: '/api/movie',
        data: action.payload
    });
    // console.log( 'fetching movies to get latest data')
    // setting our genres reducer with response 
    yield put({
        type: 'FETCH_MOVIES'
    })
} // end addMovie

export default addMovieSaga