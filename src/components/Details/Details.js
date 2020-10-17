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

  render() {
    return (
      <div>

          <Container>
            <Row className='details'>
              <Col sm={ 4 }>
                { this.props.selectedMovie.map( ( movie, i ) =>
                <div className='image'>
                  <img src= { movie.poster }></img> 
                  </div>
                )} 
                <Typography variant='body2' gutterBottom>
                  { this.props.selectedGenre.map( ( genre, i ) => 
                    <div className='genres' 
                      key={ i }>
                      { genre.name }
                    </div>)}
                </Typography>
              </Col>
              <Col sm={ 8 }
                className='description'>
              { this.props.selectedMovie.map( ( movie, i ) =>
                <div>  
                  <Typography variant='h4'>
            { movie.title }
            </Typography>
                      <Typography 
                        variant='body1'
                        color='white'>
                        { movie.description }
                      </Typography>
                  
                  </div>
                )}
                </Col>
          </Row>
        </Container>

        <br/>
        <Button 
          variant='outlined'
          color='primary'
          onClick={ this.backButton }>
          Back to List
        </Button>
      </div>
    );
  }
}

// Makes our reducers available in our component
const putReduxStateOnProps = ( reduxState ) => {
  console.log( 'details reduxState:', reduxState )
  return {
    selectedGenre : reduxState.selectedGenre,
    selectedMovie : reduxState.selectedMovie
  }
}

// connect allows us to dispatch an item
export default connect( putReduxStateOnProps )( withRouter ( Details ));