// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DangerButton from './Button/DangerButton';
import Header from './Header';
import Clock from './Clock';
import Toggle from './Button/Toggle';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron>
          <Grid>
            {getGreeting(user)}
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <div>
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
          <form>
            <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
          </form>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle />
        <DangerButton color="red" />
        <Clock />
      </div>
    );
  }
}

export default App;
