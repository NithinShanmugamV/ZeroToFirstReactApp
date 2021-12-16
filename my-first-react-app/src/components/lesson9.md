1. Now let's see how we can handle events. So all these React elements have properties that are based on standard DOM events. 

2. For example, here on our button, we have a property onClick we also have onDoubleClick, if you're working with input fields you have onKey down onKeyPress onKeyUp all those standard DOM events that you're familiar with. 

3. So here let's handle the unclick event.
```
<button onClick = {this.handleIncrement} className='badge badge-primary'>
    Hi there
</button>
```

4. We do this is by defining a  separate method in class. 
```
handleIncrement() {
    console.log("Button clicked");
}
```
And the naming convention we use is handle what are we handling here? Increment. So handleIncrement.
![Image](pics/lesson9-1.png?raw=true 'Title')

5. Now this event handler we don't have access to 'this'(doesn't have refernce to object), why is that? Well earlier you learned this JavaScript behaves differently from other languages so depending on how a function is called this can reference different objects.

6. If a function is called as part of a method in an object, this in that function would always return a reference with an object. However if that function is called as a stand alone function, without an object reference, this by default returns a reference to the window object, but if the strict mode is enabled this will return undefined.

7. So, we need to bind this to the object and to do that
```
constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
}

```

you learned that functions in JavaScript are objects, so they have properties and methods, one of them is the bind method. And with this method we can set the value of this.

8. So, I'm going to use this here, and this bind method will return a new instance of the handle Increment function and in that function this is always referencing the current object so know matter how that function is called, this is not going to change, it's always referencing current counter object.

9. There is another way to solve this problem this is currently experimental and may break in the future, so let's see how that works. Instead of adding this constructor we can convert this function into an arrow function as they don't rebind with this keyword, they inherit it.

```
handleIncrement = () => {
    console.log("Button clicked",this);
}
```
![Image](pics/lesson9-2.png?raw=true 'Title')

10. Final Code

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