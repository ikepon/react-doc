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
import Blog from './Blog/Blog';
import NameForm from './Form/NameForm';
import FlavorForm from './Form/FlavorForm';
import ReservationForm from './Form/ReservationForm';
import Calculator from './Calculator';
import FilterableProductTable from './FilterableProductTable';

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

    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
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
        <NameForm />
        <FlavorForm />
        <ReservationForm />
        <Calculator />
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

export default App;
