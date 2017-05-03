// @flow

import React from 'react';
import './App.css';
import DangerButton from './Button/DangerButton';
import Header from './Header';
import KeyVisual from './KeyVisual';
import EnvironmentNotification from './EnvironmentNotification';
import WelcomeToReact from './WelcomeToReact';
import Clock from './Clock';
import Page from './Page';
import LoginControl from './LoginControl';
import Toggle from './Button/Toggle';

class App extends React.Component {
  render() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    return (
      <div className="App">
        <Header />
        <KeyVisual user={user} />
        <EnvironmentNotification />
        <WelcomeToReact />
        <LoginControl />
        <Toggle />
        <DangerButton color="red" />
        <Clock />
        <Page />
      </div>
    );
  }
}

export default App;
