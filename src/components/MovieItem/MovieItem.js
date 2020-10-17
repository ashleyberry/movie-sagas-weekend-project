import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './MovieItem.css';
import Details from '../Details/Details';

class MovieItem extends Component {

    onNext = () => {
        // We need withRouther() in order to use props.history.push()
        console.log( 'this.props.history', this.props.history );
        this.props.history.push( '/details' );
      } // end onNext
  
  render() {
    return (
      <div className='movieItem'>
        <li key={ this.props.key }>
            <img src={ this.props.poster } 
                width='175px' 
                height='274px'
                onClick={ this.onNext }>
            </img>
        </li>
      </div>
    );
  }
}

export default connect() ( withRouter ( MovieItem ));