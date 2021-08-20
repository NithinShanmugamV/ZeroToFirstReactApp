import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
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
        <span style={this.styles} className={this.getBootstrapBadgeClass()}>
          hello
        </span>
        <button style={this.styles} className='badge badge-primary'>
          Hi there
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBootstrapBadgeClass() {
    let classes = '';
    classes += 'badge m-2 ';
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}

export default Counter;
