import React from "react";
import axios from "axios";

import "./App.css";
import { PeepsContainer } from "./components/PeepsContainer/PeepsContainer";

class App extends React.Component {
  state = { peeps: [], authenticated: false };

  componentDidMount() {
    //todo replace with get all peeps
    axios.get(`https://chitter-backend-api.herokuapp.com/peeps`).then(res => {
      const peeps = res.data;
      this.setState({ peeps });
    });
  }

  render() {
    const { peeps } = this.state;
    return (
      <div>
        <h1>hello</h1>
        <PeepsContainer peeps={peeps} />
      </div>
    );
  }
}

export default App;
