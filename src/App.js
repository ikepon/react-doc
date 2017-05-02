// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DangerButton from './Button/DangerButton';
import Header from './Header';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
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
          <p>{formatName(user)}</p>
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
        <DangerButton color="red" />
      </div>
    );
  }
}

export default App;
