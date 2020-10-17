import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'GET_MOVIES'})
  }

  handleClick = (movieId) => {
    this.props.history.push('/details');
    this.props.dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: {movieId}
    });
  }

  render() {
    return (
      <div>
        {this.props.movies.map(movie => (
          <div key={movie.id}>
            <div
              style={{display: 'inline-block'}}
            >
              <img
                style={{display: 'inline-block'}}
                src={movie.poster} 
                onClick={() => this.handleClick(movie.id)}
              />
            </div>
            <div
              style={{display: 'inline-block', maxWidth: '50%', verticalAlign: 'top'}}
            >
              <h1>{movie.title}</h1>
              <span>{movie.description}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
