1. Let us create our first component. Let us add a folder called components which by convention means we put all our components here.

2. Now let us create a module called counter by adding new file called counter.jsx to components folder.

3. Use camel notations for naming files.

4. We can use both .js and .jsx extensions. I highly encourage you to use the jsx extension instead of just js, because with this you will get better code completion.

5. import react and component class in this file. we can use shortcut to quickly generate code.

```
import React, { Component } from 'react';
class Counter extends Component {
    render() {
        return <h1>Hello World</h1>
    }
}

export default Counter;
```

6. Now we have default export class called Counter which extends(inherit) from component class in react module.This component class has a bunch of methods that we're going to inherit in this counter class.

7.let us return h1 element which has hello world.

8. Now, &lt;h1&gt;Hello World&lt;/h1&gt; is a jsx expression(not a string) which gets compiled to class React.createElement. This is the reason for importing 'React class' even though they are not directly used.

9.so we have a simple component, that when rendered returns an h1 element.

10. let's go to index.js. Here we need to import our counter class,

```
import Counter from './components/counter';
```

and change ReactDom parameter.

```
ReactDOM.render(
  <Counter/> ,
  document.getElementById('root')
);
```

11. And finally our code for counter.jsx looks like:

```
class Counter extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default Counter;
```

![Image](pics/lesson2.png?raw=true 'Title')
