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
      currentPeep: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handlePostPeep = this.handlePostPeep.bind(this);
    this.fetchPeeps = this.fetchPeeps.bind(this);
  }
  componentDidMount() {
    this.fetchPeeps()
  }

  async fetchPeeps() {
   await axios.get(
      `https://chitter-backend-api.herokuapp.com/peeps`
    ).then(res => {
      const peeps = res.data
      this.setState({peeps})})
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
          const [sessionKey, userID] = [res.data.session_key, res.data.user_id];
          console.log("session key res >>>", res);
          this.setState({ sessionKey, userID });
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
  handlePostPeep(userID, sessionKey) {
    return function(peep) {
      axios
        .post(
          `https://chitter-backend-api.herokuapp.com/peeps`,
          {
            peep: {
              user_id: userID,
              body: peep
            }
          },
          { headers: { authorization: `Token token=${sessionKey}` } }
        )
        .then(res => {
          if (res.status < 300) {
            console.log("response from posting a peep", res);
          } else {
            console.log("authentication error");
          }
        });
    };
  }
  render() {
    const { peeps, userID, sessionKey } = this.state;
    return (
      <div>
        {!sessionKey && <AuthBox handleAuth={this.handleAuth} />}
        {sessionKey && (
          <PostPeep handlePostPeep={this.handlePostPeep(userID, sessionKey)} />
        )}
        <h1>hello</h1>
        <PeepsContainer peeps={peeps} />
      </div>
    );
  }
}
export default App;
