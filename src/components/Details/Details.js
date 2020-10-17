import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
  Button, 
  Typography
} from '@material-ui/core';
class Details extends Component {

  componentDidMount() {
    this.getMovieDetails();
}

  backButton = () => {
      // We need withRouter() in order to use props.history.push()
      this.props.history.push( '/' );
  } // end backButton

  getMovieDetails = ( selectedMovieId ) => {
    console.log( 'in getMovieDetails:', selectedMovieId)
  }

  render() {
    console.log( 'DETAILS this.props:', this.props )
    console.log( 'DETAILS this.props.selectedGenre:', this.props.selectedGenre )
    console.log( 'DETAILS this.props.selectedGenre:', this.props.selectedMovie )

    return (
      <div>
        { this.props.selectedMovie.map( ( movie, i ) => 
        <div>
          <Typography variant='h4'>
            { movie.title }
          </Typography>
          <img src= { movie.poster }></img> 
          <Typography variant='body1'>
            { movie.description }
          </Typography>
        </div>
        )}
        <Typography variant='body2' gutterBottom>
          { this.props.selectedGenre.map( ( genre, i ) => 
            <div className='genres' 
              key={ i }>
              { genre.name }
            </div>)}
        </Typography>
        <br/>
        <Button 
          variant='outlined'
          onClick={ this.backButton }>
          Back to List
        </Button>
      </div>
    );
  }
}

// Makes our reducers available in our component
const putReduxStateOnProps = ( reduxState ) => {
  console.log( 'details reduxState:', reduxState )
  return {
    selectedGenre : reduxState.selectedGenre,
    selectedMovie : reduxState.selectedMovie
  }
}

// connect allows us to dispatch an item
export default connect( putReduxStateOnProps )( withRouter ( Details ));

// Details Page
// -----
// [ ] Show all details including genres, for the selected movie.
// Hint : You can make a GET request for a specific movie.
// Base functionality does not require the movie details to load correctly after refresh of the browser.
