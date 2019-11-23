import axios from "axios"
export async function getAllPeeps() {
    axios.get(`https://chitter-backend-api.herokuapp.com/peeps`).then(res => {
        const peeps = res.data;
        this.setState({ peeps });
      });
  }