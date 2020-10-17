import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css'
// import { Link } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';

class Home extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        console.log( 'in getMovies' )
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        });
    }

  render() {
    return (
        <div className="home">
            <ul>
                { this.props.movies.map( item =>  
                    <MovieItem item={ item } />
                )}
            </ul>
        </div>
    );
  }
}

// Makes our reducers available in our component
const putReduxStateOnProps = ( reduxState ) => {
    console.log( 'HOME reduxState:', reduxState )
    return {
      movies : reduxState.movies
    }
  }

// connect allows us to dispatch an item
export default connect( putReduxStateOnProps ) ( Home );