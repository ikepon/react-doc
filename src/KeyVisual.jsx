// @flow

import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

class KeyVisual extends React.Component {
  getGreeting(user) {
    if (user) {
      return <h1>Hello, {this.formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    return(
      <Jumbotron>
        <Grid>
          {this.getGreeting(this.props.user)}
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
    )
  }
}

export default KeyVisual;
