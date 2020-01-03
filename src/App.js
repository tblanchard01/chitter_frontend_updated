import React from "react";
import axios from "axios";

import "./App.css";
import { PeepsContainer } from "./components/PeepsContainer/PeepsContainer";
import { AuthBox } from "./AuthBox/AuthBox";

console.log("hot refresh");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peeps: [], sessionKey: null };
    this.handleAuth = this.handleAuth.bind(this);
  }
  componentDidMount() {
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
      .then(res => {
        if (res.status < 300) {
          const sessionKey = res.data.session_key;
          console.log('session key res >>>',res);
          this.setState({ sessionKey });
        } else {
          console.log("session Error");
        }
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
      .then(res => {
        if (res.status < 300) {
          this.getSessionKey(handle, password);
        } else {
          console.log("authentication error");
        }
      });
  }

  render() {
    const { peeps, sessionKey } = this.state;
    return (
      <div>
        {!sessionKey && <AuthBox handleAuth={this.handleAuth} />}
        <h1>hello</h1>
        <PeepsContainer peeps={peeps} />
      </div>
    );
  }
}

export default App;
