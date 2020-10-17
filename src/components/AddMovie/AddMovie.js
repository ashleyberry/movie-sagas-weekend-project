import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <h2>Add Movie Page!</h2>
        <input></input>
      </div>
    );
  }
}

export default AddMovie;

// Add Movie Page
// -----
// [ ] input field (for the movie title)
// [ ] input field (for the movie poster image URL))
// [ ] textarea (for the movie description)
// [ ] dropdown (for the genres)
// [ ] Cancel button 
//     [ ] brings the user to the Home/List Page
// [ ] Save button 
//     [ ] updates the title and description in the database
//     [ ] bring the user to the Home/List Page (which now has the new movie)
// Hint: Look at the /api/movie POST route -- it's been made already 
// Hint: You'll want to use the genres that are in the db for your dropdown
// Base functionality does not require being able to select more than one genre for a new movie