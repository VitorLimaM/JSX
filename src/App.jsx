// 1. 
const JSX = <h1>Hello JSX!</h1>;

//2. 
const JSX1 = 
  <div>
    <h1>Meu Título</h1>
    <p>Este é um parágrafo de exemplo.</p>
    <ul>
      <li>Primeiro item</li>
      <li>Segundo item</li>
      <li>Terceiro item</li>
    </ul>
  </div>

  //3.
  const JSX3 = (
  <div>
    
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* This is a comment inside JSX */}
  </div>
  
);

//4
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);


ReactDOM.render(JSX4, document.getElementById('challenge-node'));

//5 
const JSX5 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

//6
const JSX6 = (
  <div>
    <h2>Welcome to React!</h2>
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

//7
const MyComponent = function() {
  // Change code below this line
  return (
    <div>I am a stateless functional component!</div>
  );
  // Change code above this line
}

//8 
class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};

//9 
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* Change code below this line */}
        <ChildComponent />
        {/* Change code above this line */}
      </div>
    );
  }
};

