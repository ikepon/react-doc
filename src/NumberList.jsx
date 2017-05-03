// @flow

import React from 'react';
import ListItem from './ListItem';

class NumberList extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()} value={number} />
    );
    return(
      <ul>{listItems}</ul>
    )
  }
}

export default NumberList;
