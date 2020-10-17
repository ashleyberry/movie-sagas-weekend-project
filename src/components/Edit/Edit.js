import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  state = {
    title: '',
    description: '',
  }
  handleSave = (id) => {
    this.props.dispatch({type: 'UPDATE_MOVIE', payload: {
      title: this.state.title,
      description: this.state.description,
      id
    }});
    this.props.history.push('/details');
  }
  render() {
    const movie = this.props.selectedMovieDetails;
    return (
      <div>
        <button onClick={() => this.props.history.push('/details')}>Cancel</button>
        <button onClick={() => this.handleSave(movie.id)}>Save</button>
        <div>
          <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
        </div>
        <div>
          <textarea value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
        </div>
        <ul>
          {movie.genres && movie.genres.map(genre => (genre && <li>{genre.name}</li>))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
