import React, { Component } from "react";
import { Link } from 'react-router-dom';

// import material-ui styling
import { Typography } from '@mui/material';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* Navigation! */}
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
        </nav>
      </div>
      )
    }
  }

export default Footer;