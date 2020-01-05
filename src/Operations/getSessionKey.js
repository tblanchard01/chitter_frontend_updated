import axios from "axios";

export async function getSessionKey(handle, password) {
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
    this.setState({ sessionKey, userID, errors:this.state.errors.filter(error => error !== "session token") });
    

  } else {
   this.setState({ errors: [...this.state.errors, "session token"] })
  console.log('session error')
  }
}