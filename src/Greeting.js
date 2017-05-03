// @flow

import React from 'react';

class Greeting extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;

    if (isLoggedIn) {
      return this.userGreeting();
    }
    return this.guestGreeting();
  }

  userGreeting() {
    return <h1>Welcome back!</h1>;
  }

  guestGreeting() {
    return <h1>Please sign up.</h1>;
  }
}

export default Greeting;
