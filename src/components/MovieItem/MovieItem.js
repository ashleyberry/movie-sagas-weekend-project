import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './MovieItem.css';
// import Details from '../Details/Details';

class MovieItem extends Component {

    onDetails = ( ) => {
        // We need withRouther() in order to use props.history.push()
        this.props.history.push( '/details' );
      } // end onNext
  
  render() {
    return (
      <div className='movieItem'>
          {/* TODO - find a way to get movie id to details page */}
        <li key={ this.props.item.key }>
            <img src={ this.props.item.poster } 
                width='175px' 
                height='274px'
                onClick={ () => this.onDetails( this.props.item.id ) }
                >
            </img>
        </li>
      </div>
    );
  }
}

export default connect() ( withRouter ( MovieItem ));