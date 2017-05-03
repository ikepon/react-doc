// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DangerButton from './Button/DangerButton';
import Header from './Header';
import Clock from './Clock';
import Greeting from './Greeting';
import Toggle from './Button/Toggle';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    return (
      <div className="App">
        <Header />
        <Jumbotron>
          <Grid>
            {this.getGreeting(user)}
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
        <Greeting isLoggedIn={true} />
        <Toggle />
        <DangerButton color="red" />
        <Clock />
      </div>
    );
  }

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {this.formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
}

export default App;
