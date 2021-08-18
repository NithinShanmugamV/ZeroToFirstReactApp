import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0,
    greeting: {
      greet1: 'hello',
      greet2: 'hi',
    },
  };

  greet() {
    return this.state.count === 0 ? <h2>Zero</h2> : <h2>Greater than zero</h2>;
  }
  render() {
    return (
      <React.Fragment>
        <span>{this.greet()}</span>
        <h2>Hi</h2>
      </React.Fragment>
    );
  }
}

export default Counter;
