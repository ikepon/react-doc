// @flow

import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image
import { Grid, Navbar } from 'react-bootstrap';


function Header() {
  // Import result is the URL of your image
  return (
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
  );
}

export default Header;
