import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import axios
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// import logger
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the selected movie genre
const selectedGenre = (state = [], action) => {
    if (action.type === 'SET_GENRE') {
        return action.payload;
    }
    return state
}

// Used to store the selected movie details
const selectedMovie = (state = [], action) => {
    if (action.type === 'SET_MOVIE') {
        return action.payload;
    }
    return state
}

// adding a movie to the database
function* addMovie( action ) {
    console.log( 'made it into addMovie!' );
    yield axios({
        method: 'POST',
        url: '/api/movie',
        data: action.payload
    });
    console.log( 'fetching movies to get latest data')
    yield put({
        type: 'FETCH_MOVIES'
    })
} // end addMovie

function* getGenresSaga( action ) {
    console.log( 'made it into getGenresSaga!' );
    let response = yield axios({
        method: 'GET',
        url: '/api/genre'
    });
	console.log( 'getGenresSaga response:', response.data );
	yield put({
	type: 'SET_GENRES',
	payload: response.data
    })
    console.log( 'these are our genres', response.data )
} // end getGenresSaga

function* getSelectedMovieDetailsSaga( action ) {
    console.log( 'made it into getSelectedMovieDetailsSaga!' );
    let response = yield axios({
        method: 'GET',
        url: `/api/movie/${ action.payload.movieId }`
    });
	console.log( 'getSelectedMovieDetailsSaga response:', response.data );
	yield put({
        type: 'SET_MOVIE',
        payload: response.data
        })
    console.log( 'these are our selected movie details', response.data )
} // end getSelectedMovieDetailsSaga

function* getSelectedMovieGenreSaga( action ) {
    console.log( 'made it into getSelectedMovieGenreSaga!', action.payload )
    let response = yield axios({
        method: 'GET',
        url: `/api/genre/${ action.payload.movieId }`
    });
	console.log( 'getSelectedMovieGenreSaga response:', response.data );
	yield put({
        type: 'SET_GENRE',
        payload: response.data
        })
    console.log( 'these are our details', response.data )
} // end getSelectedMovieGenreSaga

function* getMoviesSaga( action ) {
    console.log( 'made it into getMoviesSaga!' )
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

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'ADD_MOVIE', addMovie );
    yield takeEvery( 'FETCH_GENRE', getSelectedMovieGenreSaga );
    yield takeEvery( 'FETCH_GENRES', getGenresSaga );
    yield takeEvery( 'FETCH_MOVIE', getSelectedMovieDetailsSaga );   
    yield takeEvery( 'FETCH_MOVIES', getMoviesSaga );
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        selectedGenre,
        selectedMovie,
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
