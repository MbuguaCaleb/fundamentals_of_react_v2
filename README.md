**REACT BASICS V2**

```

npx create-react-app my-appname
cd my-appname
npm start

This is a simple and elegant way to set up and create your react application without beginning everything from scratch.

```

```

index.js mounts our react app.
A component is a file that holds the logic,style,in a single place..

Holds HTML,CSS and the styling all in one place..

Everything is instanciated from APP.JS..(MAIN Component file)


React helps us return html from a normal js function.->jsx
Where react comes in.

Modularising all the components of the project into small files then rendering them
into the main project.

And therefore you have to export a component.


```

```
Class styling in react is in form of className.

This is how you name style classes in react.


```

```
Props come in handy when you want to add data to components dynamically.

Therefore data may ideally fetched from an api then you map it to a component props which shall then later be rendered.
```

```
Destructuring syntax for props


function Tweet(props) {
  return (
    <div className='tweet'>
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of likes</h3>
    </div>
  );
}

Once you pass a prop to a component you may destructure to make your code simpler as in ES6.

After destruturing it becomes:

function Tweet({ name, message }) {
  return (
    <div className='tweet'>
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of likes</h3>
    </div>
  );
}

```
