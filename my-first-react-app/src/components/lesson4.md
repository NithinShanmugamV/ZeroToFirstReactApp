1. Instead of hard coding hello world what if we render element dynamically.

2. State is a special property in React component, and basically it's an object that includes any data that this component needs. We can also add a complex object. So in this case, let's add a property in this object.

```
state = {
    count: 0,
    greeting: {
      greet1: 'hello',
      greet2: 'hi',
    },
};
```

3. Done, now let's remove h1 element and hello world. Add span element here we want to render something dynamically. To do that we add curly braces, and in between these curly braces we can add any valid JavaScript expression like

```
<span>{this.state.hi.greet1}</span>
```

4. Now I told you we can add any js expression. Expression produce value. So you can inclue anything that gives value like

```
<span>{8*8}</span>
```

5.  We can also call a function that returns a value

```
greet() {
  return this.state.count === 0
    ? this.state.greeting.greet1
    : this.state.greeting.greet2;
}

```

In this method, you want to check the value of the count property, and if it is zero you want to return first property inside greeting property that says hello else you want to return second property that says 'hi'

6. Now here we can also return a jsx expression here. Let us see

```
greet() {
    return this.state.count === 0 ? <h2>Zero</h2> : <h2>Greater than zero</h2>;
}
```

So this actually looks like previously how it was.

7. Now you want to understand that jsx expressions are regular Javascript expressions. Our final code looks like:

```

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
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
        <button>Hi there</button>
      </React.Fragment>
    );
  }
}

export default Counter;

```

![Image](pics/lesson4.png?raw=true 'Title')
