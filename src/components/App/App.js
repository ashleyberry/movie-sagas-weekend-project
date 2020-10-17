import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';




class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
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
          {/* Navigation!
        <nav>
          <main>
            <ul>
              <Typography>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/addMovie'>Add Movie</Link>
            </li>
            </Typography>
          </ul>
        </main>
        </nav> */}
        <Footer />
        </Router>
        
      </div>
    );
  }
}

export default App
