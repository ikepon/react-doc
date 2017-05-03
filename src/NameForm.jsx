// @flow

import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value.toUpperCase() });
  }

  handleTextareaChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.description);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <textarea value={this.state.description} onChange={this.handleTextareaChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm;
