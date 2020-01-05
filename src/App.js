import React from "react";
import "./App.css";
import { AuthBox, PeepsContainer, PostPeep } from "./Components"
import {
  fetchPeeps,
  getSessionKey,
  handlePostPeep,
  handleAuth
} from "./Operations";
console.log("hot refresh");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
      sessionKey: null,
      userID: null
    };
    this.fetchPeeps = fetchPeeps.bind(this);
    this.getSessionKey = getSessionKey.bind(this);
    this.handlePostPeep = handlePostPeep.bind(this);
    this.handleAuth = handleAuth.bind(this);
  }
  componentDidMount() {
    this.fetchPeeps();
  }
  render() {
    const { peeps, userID, sessionKey } = this.state;
    return (
      <div>
        {!sessionKey && <AuthBox handleAuth={this.handleAuth} />}
        {sessionKey && (
          <PostPeep
            handlePostPeep={this.handlePostPeep(
              userID,
              sessionKey,
              this.fetchPeeps
            )}
          />
        )}
        <h1>hello</h1>
        <PeepsContainer peeps={peeps} />
      </div>
    );
  }
}
export default App;
