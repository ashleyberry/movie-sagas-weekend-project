import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Edit.css'

// import material-ui styling
import { 
    Button, 
    Card,
    TextField, 
    Typography
  } from '@mui/material';

class Edit extends Component {

  state = {
      movieId: '',
      title: '',
      poster: '',
      description: ''
    }

  // returns user to details page
  goToDetails = () => {
    this.props.history.push( '/details' );
  } // end goToDetails
  
  // updates the local state movie information 
  handleChangeFor = ( event, propertyName ) => {
    console.log( 'in EDIT handleChangeFor:', event.target.value ) 
    this.setState({
        ...this.state,
        [ propertyName ]: event.target.value
    })
    console.log( 'the current state is:', this.state )
  }

  // dispatch the updated movie
  onUpdate = ( movieId ) => {
      console.log( `Sorry, haven't gotten this part functioning yet` );
      // this.props.dispatch({
      //     type: 'UPDATE_MOVIE', 
      //     payload: this.state });
          // this.goToDetails();
  } // end onUpdate

  render() {
    return (
      <div className="edit">
              <Typography
                className='updateTitle' 
                variant='h4'>
                { this.props.selectedMovie.map( ( movie, i ) => 
                  <div key={ i }>
                    Update { movie.title }
                  </div>)}
              </Typography>
          <div id='updateForm'>
            <Card className='editInput'>
              <div className='editForm'>
                <div className='editTitle'>
                  { this.props.selectedMovie.map( ( movie, i ) => 
                    <div key={ i }> 
                      <TextField
                        onChange={ ( event ) => this.handleChangeFor( event, 'title' ) }
                        type='text' 
                        style = { { width: 250 } }
                        placeholder= { movie.title }
                        label='Update Movie Title'>
                      </TextField>
                    </div>)}
                </div>
                <div>
                  <TextField
                      onChange={ ( event ) => this.handleChangeFor( event, 'poster' ) }
                      type='text' 
                      style = { { width: 250 } }
                      label='Update Movie Poster URL'>
                  </TextField>
                </div>
                <div className='updateDescription'>
                  { this.props.selectedMovie.map( ( movie, i ) => 
                    <div key={ i }>
                      <TextField 
                          onChange={ (event) => this.handleChangeFor( event, 'description' ) }
                          type='text' 
                          label='Update Movie Description'
                          variant='outlined'
                          multiline
                          placeholder= { movie.description }
                          style = { { width: 300 } }
                          maxRows={40}>
                      </TextField>
                  </div>)}
                </div>
              </div>
              <br/>
              <div className= 'updateBtns'> 
                <Button
                    className= 'updateBtn'
                    onClick={ this.goToDetails }>
                    Cancel
                </Button>
                
                        <div 
                          className='updateBtn'>
                            <Button 
                            variant='outlined'
                            color='secondary'
                            onClick={ this.onUpdate }>
                            Update Movie
                          </Button>
                        </div>
              </div>
            </Card>
          </div>
      </div>
    );
    }
  }

// Makes our reducers available in our component
const putReduxStateOnProps = ( reduxState ) => {
    return {
      selectedMovie : reduxState.selectedMovie
    }
  }

// connect allows us to dispatch an item
export default connect( putReduxStateOnProps )( withRouter ( Edit ));