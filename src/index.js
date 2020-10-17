import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

function* fetchMovies() {
    const movieResponse = yield axios.get('/movies');
    yield put({type: 'SET_MOVIES', payload: movieResponse.data})
}

function* fetchMovieDetails(action) {
    const movieDetailsResponse = yield axios.get(`/movies/details/${action.payload.movieId}`);
    yield put({type: 'SET_MOVIE_DETAILS', payload: movieDetailsResponse.data})
    yield put({type: 'GET_MOVIE_GENRES', payload: {movieId: action.payload.movieId}});
}

function* updateMovieDetails(action) {
    yield axios.put(`/movies/${action.payload.id}`, action.payload);
    yield put({type: 'GET_MOVIE_DETAILS', payload: {movieId: action.payload.id}})
}

function* fetchMovieGenres(action) {
    console.log('fetchMovieGenres hit')
    const movieGenresResponse = yield axios.get(`/movies/genres/${action.payload.movieId}`);
    console.log(movieGenresResponse.data)
    yield put({type: 'SET_MOVIE_GENRES', payload: movieGenresResponse.data});
}

function* movieSaga() {
    yield takeEvery('GET_MOVIES', fetchMovies)
    yield takeEvery('GET_MOVIE_DETAILS', fetchMovieDetails)
    yield takeEvery('UPDATE_MOVIE', updateMovieDetails)
    yield takeEvery('GET_MOVIE_GENRES', fetchMovieGenres)
}

// Create the rootSaga generator function
function* rootSaga() {
    yield movieSaga();
}

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

// Used to store movies returned from the server
const selectedMovieDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        case 'SET_MOVIE_GENRES':
            return { ...state, genres: action.payload};
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
