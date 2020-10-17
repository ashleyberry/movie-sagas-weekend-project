import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Details extends Component {

  backButton = () => {
      // We need withRouther() in order to use props.history.push()
      console.log( 'this.props.history', this.props.history );
      this.props.history.push( '/' );
  } // end backButton

  render() {
    console.log( 'this.props:', this.props )
    return (
      <div>
        <p>Deeeeeetails</p>
        <button onClick={ this.backButton }>Back to List</button>
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
