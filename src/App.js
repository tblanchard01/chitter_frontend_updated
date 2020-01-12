import React from "react";
import "./App.css";
import { AuthBox, PeepsContainer, PostPeep, ErrorBox } from "./Components";
import {
  fetchPeeps,
  getSessionKey,
  handlePostPeep,
  handleAuth,
  handleLike,
  handleUnlike
} from "./Operations";
console.log("hot refresh");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
      sessionKey: null,
      handle: null,
      userID: null,
      errors: []
    };
    this.fetchPeeps = fetchPeeps.bind(this);
    this.getSessionKey = getSessionKey.bind(this);
    this.handlePostPeep = handlePostPeep.bind(this);
    this.handleAuth = handleAuth.bind(this);
    this.handleLike = handleLike.bind(this);
    this.handleUnlike = handleUnlike.bind(this);
  }
  componentDidMount() {
    this.fetchPeeps();
  }
  render() {
    const { peeps, userID, sessionKey, errors, handle } = this.state;
    return (
      <div>
        {!!errors.length && <ErrorBox message={errors[0]} />}
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
        <h1>hello{handle || ""}!</h1>
        <PeepsContainer
          peeps={peeps}
          authenticated={!!sessionKey}
          handleLike={this.handleLike(userID, sessionKey, this.fetchPeeps)}
          handleUnlike={this.handleUnlike(userID, sessionKey, this.fetchPeeps)}
        />
      </div>
    );
  }
}
export default App;
