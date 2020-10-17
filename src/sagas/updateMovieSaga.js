// import axios
import axios from "axios";
import { put } from 'redux-saga/effects';

// updates movie information
function* updateMovieSaga( action ) {
    console.log( 'made it into updateMovieSaga! ID:', action.payload )
        // yield axios({
        //     method: 'PUT',
        //     url: `/api/movie/${ action.payload }`,
        //     data: action.payload
        // });
        // // console.log( 'fetching movies to get latest data')
        // // setting our genres reducer with response 
        // yield put({
        //     type: 'FETCH_MOVIES'
        // })
    } // end updateMovieSaga

export default updateMovieSaga