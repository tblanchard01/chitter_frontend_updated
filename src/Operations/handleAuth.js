import axios from "axios"

export async function handleAuth(handle, password) {
  console.log('...called!')
  try {
  const res = await axios.post(
    `https://chitter-backend-api.herokuapp.com/users`,
    {
      user: {
        handle,
        password
      }
    }
  );
  console.log('auth response', res)
  if (res.status === 201) {
    this.getSessionKey(handle, password);
    this.setState({ errors:this.state.errors.filter(error => error !== "authentication") })
    this.setState({handle})
  }} catch(e){
    if(!this.state.errors.includes("authentication")){
     this.setState({ errors: [...this.state.errors, "authentication"]}) }
       console.log("authentication error");
  }
}