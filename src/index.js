import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// import sagas
import addMovieSaga from './sagas/addMovieSaga';
import getGenresSaga from './sagas/getGenresSaga';
import getMoviesSaga from './sagas/getMoviesSaga';
import getSelectedMovieDetailsSaga from './sagas/getSelectedMovieDetailsSaga';
import getSelectedMovieGenreSaga from './sagas/getSelectedMovieGenreSaga';
import updateMovieSaga from './sagas/updateMovieSaga';

//import reducers
import movies from './reducers/moviesReducer';
import genres from './reducers/genresReducer';
import selectedGenre from './reducers/selectedGenreReducer';
import selectedMovie from './reducers/selectedMovieReducer';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';

// import logger
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'ADD_MOVIE', addMovieSaga );
    yield takeEvery( 'FETCH_GENRE', getSelectedMovieGenreSaga );
    yield takeEvery( 'FETCH_GENRES', getGenresSaga );
    yield takeEvery( 'FETCH_MOVIE', getSelectedMovieDetailsSaga );   
    yield takeEvery( 'FETCH_MOVIES', getMoviesSaga );
    yield takeEvery( 'UPDATE_MOVIE', updateMovieSaga );
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
