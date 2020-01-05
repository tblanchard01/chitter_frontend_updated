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
    console.log("session key res >>>", res);
    this.setState({ sessionKey, userID });
  } else {
    console.log("session Error");
  }
}