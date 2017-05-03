// @flow

import React from 'react';

class Greeting extends React.Component {
  userGreeting() {
    return <h1>Welcome back!</h1>;
  }

  guestGreeting() {
    return <h1>Please sign up.</h1>;
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    if (isLoggedIn) {
      return this.userGreeting();
    }
    return this.guestGreeting();
  }
}

export default Greeting;
