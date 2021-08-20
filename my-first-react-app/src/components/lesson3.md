1. If you try to add extra html element to return statement you can see compilation error "JSX expressions must have one parent element."

2. This is because this jsx expression(return &lt;h1&gt;Hello World&lt;/h1&gt;;) get compiled to a call React.createElement(). First argument to this method is type element which in this case looks like this

```
React.createElement('h1');
```

3. But when we have two html elements browser doesn't know which element to compile what is the top of element it should return.

4. One solution is to wrap it with div. So when it compiles browser understand the code like this

```
React.createElement('div');
```

5. Note whenever you are dealing with long jsx expression you may write it in two lines like

```
return
      <div>
        <h1>Hello World</h1>
        <h2>Hi</h2>
      </div>
    ;
```

but this has a problem. If a code doesn't have semi-colon js automatically adds it, in this case it adds 'return ;' which will not return anything. So, to avoid this we use paranthesis.

```
return (
      <div>
        <h1>Hello World</h1>
        <h2>Hi</h2>
      </div>
);
```

6. If you inspect this we have something like this.

```
<div id ='root>
    <div>
        <h1>Hello World</h1>
        <h2>Hi</h2>
    </div>
</div>
```

7. Root is our main react application. And there is an extra div that we needed for REact.createElement(). But the problem is this adds extra div to DOM. The only reason we required div is to group them. So, instead we can use react fragment.

```
return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h2>Hi</h2>
      </React.Fragment>
    );
```

8. This does not add any extra node to dom. And our final code looks like:

```
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h2>Hi</h2>
      </React.Fragment>
    );
  }
}

export default Counter;

```

![Image](pics/lesson3.png?raw=true 'Title')
