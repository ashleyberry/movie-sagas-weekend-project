import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

    return (
      <div>
        <Typography variant="body1" gutterBottom>
          Test typing
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

export default ( withRouter ( Details ));

// Details Page
// -----
// [ ] Show all details including genres, for the selected movie.
// Hint : You can make a GET request for a specific movie.
// Base functionality does not require the movie details to load correctly after refresh of the browser.
