import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './MovieItem.css';
// styling via material ui
import Card from '@material-ui/core/Card';

class MovieItem extends Component {

  // updating the state with the selected
  state = {
    movieId: ''
  }

  handleChangeFor = () => {
    // console.log('in handleChangeFor:', this.props.item.id);
    let movieId = this.props.item.id
    // set a new state
    this.setState({
      // updating movieId property to be selected movie value
      movieId: movieId
    });
    // console.log('this.state', this.state);
  };

  // getting our selected movie's genre
  onGetInfo = () => {
    // console.log('onDetails this.state', this.state);
    // first dispatch to get selected movie's genre(s)
    this.props.dispatch({
      type: 'FETCH_GENRE', 
      payload: this.state});
    // second dispatch to get selected movie's info
    this.props.dispatch({
      type: 'FETCH_MOVIE', 
      payload: this.state});
    // sends user to details page
    this.props.history.push( '/details' );
  } // end onGetInfo
  
  render() {
    return (
        <div className='movieItem'>
          <li key={ this.props.item.key }>
              <Card>
                <img src={ this.props.item.poster } 
                    value={ this.props.item.key }
                    onMouseEnter={ this.handleChangeFor }
                    onClick={ this.onGetInfo }
                    >
                </img>
              </Card>
          </li>
        </div>
    );
  }
}

// withRouter() allows us to use props.history.push()
export default connect() ( withRouter ( MovieItem ));