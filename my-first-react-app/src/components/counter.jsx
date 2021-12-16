import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <React.Fragment>
        <span  className={this.getBootstrapBadgeClass()}>
          {this.updateSpanValue()}
        </span>
        <button onClick = {this.handleIncrement} className='badge badge-primary'>
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

  updateSpanValue(){
    return this.state.count>0 ? this.state.count : "Zero";
  }
}

export default Counter;
