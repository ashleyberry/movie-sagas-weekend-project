import React from "react";
import { Link } from 'react-router-dom';

// import material-ui styling
import { Typography } from '@material-ui/core';

const Footer = () => (
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
);

export default Footer;