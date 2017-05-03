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
import NumberList from './NumberList';
import LoginControl from './LoginControl';
import Toggle from './Button/Toggle';
import Blog from './Blog/Blog'

class App extends React.Component {
  render() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    const numbers = [1, 2, 3, 4, 5];

    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

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
        <NumberList numbers={numbers} />
        <Blog posts={posts}/>
      </div>
    );
  }
}

export default App;
