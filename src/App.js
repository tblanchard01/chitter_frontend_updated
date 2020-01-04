import React from "react";
import axios from "axios";
import "./App.css";
import { PeepsContainer } from "./components/PeepsContainer/PeepsContainer";
import { AuthBox } from "./components/AuthBox/AuthBox";
import { PostPeep } from "./components/PostPeep/PostPeep";
console.log("hot refresh");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
      sessionKey: null,
      userID: null,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handlePostPeep = this.handlePostPeep.bind(this);
    this.fetchPeeps = this.fetchPeeps.bind(this);
  }
  componentDidMount() {
    this.fetchPeeps();
  }
  async fetchPeeps() {
    const res = await axios.get(
      `https://chitter-backend-api.herokuapp.com/peeps`
    );
    const peeps = res.data;
    this.setState({ peeps });
  }
  async getSessionKey(handle, password) {
    const res = await axios.post(
      `https://chitter-backend-api.herokuapp.com/sessions`,
      {
        session: {
          handle,
          password
        }
      }
    );
    if (res.status < 300) {
      const [sessionKey, userID] = [res.data.session_key, res.data.user_id];
      console.log("session key res >>>", res);
      this.setState({ sessionKey, userID });
    } else {
      console.log("session Error");
    }
  }
  async handleAuth(handle, password) {
    const res = await axios.post(
      `https://chitter-backend-api.herokuapp.com/users`,
      {
        user: {
          handle,
          password
        }
      }
    );
    if (res.status < 300) {
      this.getSessionKey(handle, password);
    } else {
      console.log("authentication error");
    }
  }
   handlePostPeep(userID, sessionKey, fetchPeeps) {
    return async function(peep) {
      const res = await axios.post(
        `https://chitter-backend-api.herokuapp.com/peeps`,
        {
          peep: {
            user_id: userID,
            body: peep
          }
        },
        { headers: { authorization: `Token token=${sessionKey}` } }
      );
      if (res.status < 300) {
        fetchPeeps()
      } else {
        
      }
    };
  }
  render() {
    const { peeps, userID, sessionKey } = this.state;
    return (
      <div>
        {!sessionKey && <AuthBox handleAuth={this.handleAuth} />}
        {sessionKey && (
          <PostPeep handlePostPeep={this.handlePostPeep(userID, sessionKey, this.fetchPeeps)} />
        )}
        <h1>hello</h1>
        <PeepsContainer peeps={peeps} />
      </div>
    );
  }
}
export default App;
