import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    greeting: {
      greet1: 'hello',
      greet2: 'hi',
    },
  };

  styles = {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: "'Courier New', Courier, monospace",
  };
  greet() {
    return this.state.count === 0 ? <h2>Zero</h2> : <h2>Greater than zero</h2>;
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} />
        <span style={this.styles} className='bagde badge-success m-2'>
          {this.state.greeting.greet1}
        </span>
        <button
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            fontFamily: "'Courier New', Courier, monospace",
          }}
          className='badge badge-primary'
        >
          Hi there
        </button>
        <h2>Hi</h2>
      </React.Fragment>
    );
  }
}

export default Counter;
