import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Details.css'

// styling with bootstrap
import { 
  Col, 
  Container, 
  Row 
} from 'react-bootstrap';

// stying with material-ui
import { 
  Button, 
  Typography
} from '@material-ui/core';

class Details extends Component {

  // go back to home page
  backButton = () => {
      this.props.history.push( '/' );
  } // end backButton

  // go to edit page
  onEditMovie = ( movieId ) => {
    console.log( 'in onEditMovie:', movieId )
    this.props.dispatch({
      type: 'UPDATE_MOVIE', 
      payload: movieId });
    this.props.history.push( '/edit' );
  } // end onEditMovie

  render() {
    console.log( 'details selectedMovie:', this.props.selectedMovie )
    return (
      <div>
        <Container>
          <Row className='details'>
            <Col sm={ 4 }>
              { this.props.selectedMovie.map( ( movie, i ) =>
                <div className='image'>
                  <img key= { i } src= { movie.poster }></img> 
                </div>
              )} 
              { this.props.selectedGenre.map( ( genre, i ) => 
                <div 
                  className='genres' 
                  key={ i }>
                  <p>{ genre.name }</p>
                </div>)}
            </Col>
            <Col sm={ 8 }>
            <div className= 'movieTitle'>
              { this.props.selectedMovie.map( ( movie, i ) => 
                <div>
                  <Typography 
                    variant='h3'>
                    { movie.title }
                  </Typography>
                </div>
              )}
            </div>
              <div className='description'>
                { this.props.selectedMovie.map( ( movie, i ) =>
                <div> 
                  <div> 
                    <Typography 
                      variant='body1'>
                      { movie.description }
                    </Typography>
                  </div>
                  <div className='detailsBtns'>
                      <Button className='backBtn'
                        variant='outlined'
                        color='primary'
                        onClick={ this.backButton }>
                        Back to List
                      </Button>
                          <Button 
                            variant='outlined'
                            color='secondary'
                            onClick={ this.onEditMovie }>
                            Edit Movie
                          </Button>
                    </div>
                </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
    );
  }
}

// Makes our reducers available in our component
const putReduxStateOnProps = ( reduxState ) => {
  // console.log( 'details reduxState:', reduxState )
  return {
    selectedGenre : reduxState.selectedGenre,
    selectedMovie : reduxState.selectedMovie
  }
}

// connect allows us to dispatch an item
export default connect( putReduxStateOnProps )( withRouter ( Details ));