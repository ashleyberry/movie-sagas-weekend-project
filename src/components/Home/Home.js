import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css'
import MovieItem from '../MovieItem/MovieItem';

class Home extends Component {

  componentDidMount() {
    this.getMovies();
  }

  // dispatches to rootSaga generator function
  getMovies() {
    console.log( 'in getMovies' )
    this.props.dispatch({
      // setting our action type
      type: 'FETCH_MOVIES'
    });
  }

  render() {
    return (
        <div>
          <div className='moviesList'>
            <ul>
              { this.props.movies.map( item =>  
                  <MovieItem key= { item.id } item={ item } />
              )}
            </ul>
          </div>
        </div>
    );
  }
}

// Makes our reducers available in our component
const putReduxStateOnProps = ( reduxState ) => {
    // console.log( 'HOME reduxState:', reduxState )
    return {
      movies : reduxState.movies
    }
  }

// connect allows us to dispatch an item
export default connect( putReduxStateOnProps ) ( Home );

