1. Let us remove the greeting property from class as it is not required now and make some according changes where we used this property dynamically.

```
class Counter extends Component {
  state = {
    count: 0,
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
        <span style={this.styles} className='bagde badge-success m-2'>
          hello
        </span>
        <button style={this.styles} className='badge badge-primary'>
          Hi there
        </button>
      </React.Fragment>
    );
  }
}
```

2. Now ,we want to render one of these bootstrap css rule dynamically depending on the value of the count property, and this is a pattern that you see a lot in real world applications.

3. Let us give yellow colour when count is zero. For that we should use 'badge-warning'.

4. So, here's one way to do this. We can define a varible set it to a string. In this string we're going to include all the classes that we're going to pass here. So, we start with the primary classes that we want to have in all cases, that is badge and m-2.

```
let classes = "";
classes += "badge m-2";
```

5. Now depending on the value of the count property, we want to add badge warning or badge primary to this string.

```
render() {
    let classes = '';
    classes += 'badge m-2 ';
    classes += this.state.count === 0 ? 'badge-warning':'badge-primary';

    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          hello
        </span>
        <button style={this.styles} className='badge badge-primary'>
          Hi there
        </button>
      </React.Fragment>
    );
  }
```

For different count values it gives different bootstrap classes

![Image](pics/lesson6-1.png?raw=true 'Title')
![Image](pics/lesson6-2.png?raw=true 'Title')

6. Now our render method looks big. So, we don't want many methods inside render method. So we can shorten our code by defining classes outside render like

```
getBadgeClasses() {
  let classes = '';
  classes += 'badge m-2 ';
  classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
  return classes;
}
render() {
  return (
    <React.Fragment>
      <span style={this.styles} className={this.getBadgeClasses()}>
        hello
      </span>
    </React.Fragment>
  );
  }
```

7. There is also a shortcut for doing this. Select the code you want to make it as separate method. Press ctrl + shift + R and select extract to method in class 'class name'
   ![GIF](pics/lesson6.gif?raw=true 'Title')
