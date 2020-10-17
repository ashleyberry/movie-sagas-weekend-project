import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={MovieList} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
          <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
