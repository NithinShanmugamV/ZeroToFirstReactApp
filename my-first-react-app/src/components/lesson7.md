1. you're going to learn how to render a list of items. So let's imagine, we want to render a list of tags here. You start by adding a new property to our state object tags. We set to an array and add elements.

```
state = {
    count: 0,
    tags: ['tag1','tag2','tag3']
};
```

2. we want to render these tags, using ul, and li elements. We can use the map method to map each element in this array, to a react element. And with this, we can render a list of items.

```
<ul>
  {this.state.tags.map((tag) => (
      <li></li>
    ))}
</ul>
```

![Image](pics/lesson7-1.png?raw=true 'Title')

So here, you want to render something dynamically, so we start with curly braces, next, we get this.state.tags this is an array, so here we have a map method. Now, as the argument we need to pass an arrow function, tag, goes to now we get each tag and map it to a list item.

3. We are not done yet. Now here, in this jsx expression, you want to render a tag dynamically, so, once again we add curly braces, and render a tag.

```
<ul>
  {this.state.tags.map((tag) => (
      <li>{tag}</li>
    ))}
</ul>
```

4. If we look at the browser, in the console, we should see this error. Each child in an array or iterator should have a unique key. We get this error because it needs to uniquely identify each item in this list. Because if the state of this react element in the virtual DOM changes, react wants to quickly figure out what element is changed, and where in the DOM it should make changes to keep the DOM in sync with the virtual DOM.

5. We correct this by following way.

```
<ul>
  {this.state.tags.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
</ul>
```

6. Here, each tag is a string and that string is unique, so we can use the same value for the key attribute. Now in a real application, your tags might be objects, so they could have an id property, and you would use that here, but just note that this key should only be unique in this list, and it's the list of tags, it doesn't have to be unique in the entire application, or on the entire page, you can have multiple lists and each item in the given list should have a key that is unique only
   in that test.

7. Our final code looks like

```
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

```

![Image](pics/lesson7-2.png?raw=true 'Title')
