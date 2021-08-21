1. In last lesson we saw how to render a list. Sonow we will see conditional rendering. For that let us remove unwanted methids and elements that are not nneded for this lesson(getBootstrapBadgeClass(),greet(),span, button). So our code looks like

```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };
  render() {
    return (
      <React.Fragment>
        <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
      </React.Fragment>
    );
  }
}

export default Counter;
```

2. So here comes the condition. You want to render list of items in an array, if the array has atleast one element. Else you want to say that there is no element in array.

3. Well in jsx, unlike angular, we don't have if and else, because jsx is not a templating engine. So, to render elements conditionally, we need to go back to our plain old JavaScript.

4. Here's one way to implement this. You can add a separate method out side render method. and call it inside render method.

```
renderTags() {
    if (this.state.tags.length === 0) return <p>List item is empty</p>;

    return <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>;
}
render() {
    return (
        <React.Fragment>
          {this.renderTags()}
        </React.Fragment>
    );
}

```

![Image](pics/lesson8-1.png?raw=true 'Title')
![Image](pics/lesson8-2.png?raw=true 'Title')

5. Let us see another way. We can do this only if you have if statement without else part.

```
render() {
  return (
    <React.Fragment>
      {this.state.tags.length === 0 && 'Please create a new tag'}
      <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
    </React.Fragment>
  );
}
```

6. Let us break down what this code does. Here this.state.tags.length === 0 checks whether length of array is 0. If the length is 0 it returns true. Note here we are comparing boolean with non-boolean data type so js engine converts it to truthy(if string is empty it becomes falsy). So true && truthy returns string. So we get 'Please create a new tag' we length is zero.

7. If length is zero then second statement does not return list as it doesn't contain anything inside.

8. If length is more than 0 then second statement returns list and first statement fails so it doesn't return anything.
   ![Image](pics/lesson8-3.png?raw=true 'Title')
   ![Image](pics/lesson8-4.png?raw=true 'Title')

So our final code is

```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && 'Please create a new tag'}
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
```
