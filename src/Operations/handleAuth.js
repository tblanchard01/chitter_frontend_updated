import axios from "axios"

export async function handleAuth(handle, password) {
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