import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './MovieItem.css';

import Card from '@material-ui/core/Card';

class MovieItem extends Component {

  state = {
    movieId: ''
  }

  componentDidMount = () => {
    this.getMovie();
  };

  getMovie = () => {
    console.log( 'in getMovie current state:', this.state )
  }

  handleChangeFor = () => {
    console.log('in handleChangeFor:', this.props.item.id);
    let movieId = this.props.item.id
    this.setState({
      movieId: movieId
    });
    console.log('this.state', this.state);
  };

  onGetGenre = () => {
    console.log('onDetails this.state', this.state);
    this.props.dispatch({
      type: 'FETCH_GENRE', 
      payload: this.state});
      this.props.dispatch({
      type: 'FETCH_MOVIE', 
      payload: this.state});
      this.props.history.push( '/details' );
    } // end onNext
  
  render() {
    return (
        <div className='movieItem'>
            {/* TODO - find a way to get movie id to details page */}
          <li key={ this.props.item.key }>
              <Card>
                <img src={ this.props.item.poster } 
                    width='175px' 
                    height='274px'
                    value={ this.props.item.key }
                    onMouseEnter={ this.handleChangeFor }
                    onClick={ this.onGetGenre }
                    >
                </img>
              </Card>
          </li>
        </div>
    );
  }
}

export default connect() ( withRouter ( MovieItem ));