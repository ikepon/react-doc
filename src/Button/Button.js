import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button type="button" name="aaa" value="aaa" className="Button">
        <font size="2">ここを</font>
        <font size="5" color="#333399">押してね</font>
      </button>
    )
  }
}

export default Button;
