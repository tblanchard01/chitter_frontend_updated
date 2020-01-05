import axios from "axios";

export async function fetchPeeps() {
  const res = await axios.get(
    `https://chitter-backend-api.herokuapp.com/peeps`
  );
  const peeps = res.data;
  this.setState({ peeps });
}