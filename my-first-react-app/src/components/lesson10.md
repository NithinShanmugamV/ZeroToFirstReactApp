1. Now let us see how to update value of count. In React we do not modify the state directly, in other words,
```
handleIncrement = () => {
    this.state.count++;
 }

```

2. Well technically the value of the count property is being implemented but react is not aware of that. That's why it's not updating the view. To solve this we use one of the method that is there in component which we imported using 'import React, { Component } from 'react';'

```
handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
}

```

3. this.set State, this method tells React that we're updating the state and it will figure out what part of the state has changed and based on that it will bring the DOM in sync with the virtual DOM.

4. We have to explicitly tell React what is changed. So here is the argument to setState method, we pass an object and the properties of this object will be merged with what we have in the state object, or it will overwrite those properties if they already exist, so here I'm going to pass count property, and I want to set it's value to this.state.count + 1 so we set the current count, increment it and then set it.
![Image](pics/lesson10-1.png?raw=true 'Title')
![Image](pics/lesson10-2.png?raw=true 'Title')

5. Let's see what exactly happens under the hood when we click the increment button. At this point we're calling this.setState this method is telling React that the state of this component is going to change. 

6. React will then schedule a call to the render method. So sometime in the future, this method is going to be called, we don't know when, this is an asynchronous call which means it's going to happen in the future. 

7. It might be 5 milliseconds later or 10 milliseconds later, we don't know. So at some point in the future the render method is going to be called method as you can see will return a new React element.

![Image](pics/lesson10-3.png?raw=true 'Title')

8. So here's the new virtual DOM, we also have the old virtual DOM, React will put these side by side and compare them to figure out what elements in a virtual DOM are modified. 

9. In this case it realizes that our span is modified because that is where we have used out property. 



Over final code looks like:
```
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

```
