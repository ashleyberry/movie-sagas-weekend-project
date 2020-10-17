import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            {/* Popcorn header */}
          </h1>
        </div>
        <Router>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/details' exact>
            <Details />
          </Route>
          <Route path='/addMovie' exact>
            <AddMovie />
          </Route>
          <Route path='/edit' exact>
            <Edit />
          </Route>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App
