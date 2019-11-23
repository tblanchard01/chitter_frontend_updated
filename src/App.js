import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {peeps: {name: "tim", body: "hello"}}
  
  }
  render() {
    const {name} = this.state.peeps 
    return (
     <div>
       hello {name}
      </div>
    );
  }
}

export default App;
