import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import material-ui styling
import { 
  Button, 
  InputLabel, 
  FormControl, 
  FormHelperText,
  NativeSelect,
  TextField, 
  Typography
} from '@material-ui/core';

class AddMovie extends Component {

  state = {
    title: '',
    poster: '',
    description: '',
    genre: ''
  }

  componentDidMount = () => {
    this.getGenres();
  }

  // get all the genres from our database
  getGenres = () => {
    console.log( 'in getGenres' )
    this.props.dispatch({
        type: 'FETCH_GENRES'
    });
  }

  // sends user to home page after button click
  goHome = () => {
      this.props.history.push( '/' ); 
  } // end goHome

  handleChangeFor = (event, propertyName) => {
    console.log( 'in handleChangeFor:', event.target.value )
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  // cancel adding a movie and return to home page
  onCancel = () => {
    this.props.history.push( '/' );
  } // end onCancel

  // dispatch the inputted movie
  onSave = () => {
    console.log( 'in onSave', this.state );
    this.props.dispatch({
    type: 'ADD_MOVIE', 
    payload: this.state});
    this.goHome();
  } // end onSave

  render() {
    return (
      <div>
        <Typography 
            variant="h4">
            Add A Movie!
        </Typography>
        <div>
        <TextField 
            onChange={ ( event ) => this.handleChangeFor( event, 'title' )  } 
            required
            type='text' 
            label='Movie Title'>
        </TextField>
        </div>
        <div>
        <TextField 
            onChange={ ( event ) => this.handleChangeFor( event, 'poster' )  } 
            required
            type='text' 
            label='Poster Image URL'>
        </TextField>
        </div>
        <div>
        <TextField 
            onChange={ ( event ) => this.handleChangeFor ( event, 'description' ) } 
            type='text' 
            label='Movie Description'
            multiline
            style = { { width: 400 } }
            rowsMax={12}
            >
        </TextField>
        </div>
        <br/>
        {/* drop down with genre names */}
        <div>
          <FormControl>
          <InputLabel htmlFor="genre-native-helper">Genre</InputLabel>
          <NativeSelect
            value={ this.state.genre_id }
            onChange={ ( event ) => this.handleChangeFor ( event, 'genre' ) }
            inputProps={{
              name: 'Genre',
              id: 'genre-native-helper'}}>
            <option aria-label="None" value="" />
            {this.props.genres.map( genre => {
              return (
                <option key={ genre.id } 
                value={ genre.id }>
                { genre.name }
                </option>
              )
            })}
          </NativeSelect>
          <FormHelperText>Choose a movie genre</FormHelperText>
          </FormControl>
        </div>
        <br/>
        <div>
          <Button 
            onClick={ this.onCancel }
            variant='outlined'>
            Cancel
          </Button>
          <Button 
            onClick={ this.onSave }
            variant='outlined'>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

const putReduxStateOnProps = ( reduxState ) => {
  console.log( 'in addMovie reduxState:', reduxState )
  return {
    genres : reduxState.genres,
  }
}

export default connect( putReduxStateOnProps ) ( withRouter( AddMovie ));