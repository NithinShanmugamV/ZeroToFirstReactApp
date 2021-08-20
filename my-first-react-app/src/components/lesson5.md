1. Let's talk about attributes and learn how to set attributes. Let us image tag and its source will be 'https://picsum.photos/200'. Note this text(https://picsum.photos/200) generates a random image with size 200px each time u load ypur page. So our render method code looks like this.

```
render() {
    return (
      <React.Fragment>
        <img src='https://picsum.photos/200' />
        <span>{this.greet()}</span>
        <h2>Hi</h2>
      </React.Fragment>
    );
  }
```

2. Note the source attribute is static here. We need to make it dynamic . Let's add a property in state object and try to make it as source attribute.

```
state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
};
```

3. Now we have to pass imageUrl as src attribute

```
<img src={this.state.imageUrl} />
```

4. Now we know to set a attribute but setting style and class attribute is little different. Why? let's see.

let us add a span element give it a class. Note, in html we give class like this

```
span class = "image"></span>
```

Since we are using jsx expression, these jsx expressions get compiled in React elements which are essentially plain JavaScript objects. We cannot use a class property on an object, because that's a reserve keyword in JavaScript. So the name of the attribute in jsx is className.

```
<span className = "image"></span>
```

5. Let us use some bootstrap classes

```
<span className='bagde badge-success m-2'>{this.state.greeting.greet1}</span>
<button className='badge badge-primary'>Hi there</button>
```

6. Now finally let's look at applying styles. So, for the most part, it's best to use classes this is for performance and maintainability, but
   that you may want to break the rules if you know what you're doing and you may want to apply a style to a specific element.

7. Now, in jsx, we have this style attribute. What we do here is, we create a property that has all the css properties that you needed to style this particular element. Note the css properties should be in camel case notation.

```
styles = {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: "'Courier New', Courier, monospace",
};
```

8. And then pass it to style attribute like this.

```
<span style={this.styles} className='bagde badge-success '>hi</span>
```

9. This is one way of doing it. Sometimes you want to apply different styles to many elements and you don't want to add more properties to your class. So for that you can use inline styles.

```
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
```

So our final code looks like:

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
      </React.Fragment>
    );
  }
}

export default Counter;

```
