import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    const movie = this.props.selectedMovieDetails;
    return (
      <div>
        <button onClick={() => this.props.history.push('/')}>Back to List</button>
        <button onClick={() => this.props.history.push('/edit')}>Edit</button>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <ul>
          {movie.genres && movie.genres.map(genre => (genre && <li>{genre.name}</li>))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
