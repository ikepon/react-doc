// @flow

import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image
import { Grid, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    const navbarInstance = (
      <Navbar inverse collapseOnSelect>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  return (
    navbarInstance
  );
  }
}

export default Header;
