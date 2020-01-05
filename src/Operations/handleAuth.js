import axios from "axios"

export async function handleAuth(handle, password) {
  console.log('...called!')
  const res = await axios.post(
    `https://chitter-backend-api.herokuapp.com/users`,
    {
      user: {
        handle,
        password
      }
    }
  );
  console.log(res)
  if (res.status !== 422) {
    this.getSessionKey(handle, password);
    this.setState({ errors:this.state.errors.filter(error => error !== "authentication") })
  } else {
    this.setState({ errors: [...this.state.errors, "authentication"]}) 
    console.log("authentication error");
  }
}