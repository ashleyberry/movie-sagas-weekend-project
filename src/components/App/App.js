import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "../AddMovie/AddMovie";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Edit from "../Edit/Edit";

import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that accesses the theme
  }
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="App-header">
              <h1>{/* Popcorn header */}</h1>
            </div>
            <Router>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/details" exact>
                <Details />
              </Route>
              <Route path="/addMovie" exact>
                <AddMovie />
              </Route>
              <Route path="/edit" exact>
                <Edit />
              </Route>
              <Footer />
            </Router>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

export default App;
