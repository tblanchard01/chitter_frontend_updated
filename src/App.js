import React from "react";
import axios from "axios";

import "./App.css";
import { PeepsContainer } from "./components/PeepsContainer/PeepsContainer";
import { AuthBox } from "./AuthBox/AuthBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peeps: [], authenticated: false };
    this.handleAuth = this.handleAuth.bind(this);
  }
  componentDidMount() {
    //todo replace with get all peeps
    axios.get(`https://chitter-backend-api.herokuapp.com/peeps`).then(res => {
      const peeps = res.data;
      this.setState({ peeps });
    });
  }

  handleAuth(handle, password) {
    axios
      .post(`https://chitter-backend-api.herokuapp.com/users`, {
        user: {
          handle,
          password
        }
      })
      .then(res => console.log(res));
  }

  render() {
    const { peeps, authenticated } = this.state;
    return (
      <div>
        {!authenticated && <AuthBox handleAuth={this.handleAuth} />}
        <h1>hello</h1>
        <PeepsContainer peeps={peeps} />
      </div>
    );
  }
}

export default App;
