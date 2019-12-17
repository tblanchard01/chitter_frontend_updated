import React from "react";
import axios from "axios";

import "./App.css";
import { PeepsContainer } from "./components/PeepsContainer/PeepsContainer";
import { AuthBox } from "./AuthBox/AuthBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peeps: [], authenticated: false, sessionKey: null };
    this.handleAuth = this.handleAuth.bind(this);
  }
  componentDidMount() {
    //todo replace with get all peeps
    axios.get(`https://chitter-backend-api.herokuapp.com/peeps`).then(res => {
      const peeps = res.data;
      this.setState({ peeps });
    });
  }

  getSessionKey(handle, password) {
    axios
      .post(`https://chitter-backend-api.herokuapp.com/sessions`, {
        session: {
          handle,
          password
        }
      })
      .then(res => console.log("response from getting a session token", res));
  }

  handleAuth(handle, password) {
    axios
      .post(`https://chitter-backend-api.herokuapp.com/users`, {
        user: {
          handle,
          password
        }
      })
      .then(res => {
        console.log("this is the res", res);
        if (res.status < 300) {
          this.getSessionKey(handle, password);
        } else {
          console.log("authentication error");
        }
      });
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
