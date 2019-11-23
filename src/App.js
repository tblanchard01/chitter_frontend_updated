import React from "react";
import axios from "axios";
import { Peep } from "./components/Peep/Peep";

import "./App.css";

class App extends React.Component {
  state = { peeps: [] };

  componentDidMount() {
    axios.get(`https://chitter-backend-api.herokuapp.com/peeps`).then(res => {
      const peeps = res.data;
      this.setState({ peeps });
      console.log(this.state);
    });
  }
// todo: move this to a container component 

  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.state.peeps.map((peep, index) => {
         const {user, body, likes} = peep; 
         return  <Peep
            key={index}
            handle={user.handle}
            body={body}
            likes={likes.length}
          />

        })
       } 
       </div>

    );
}
}

export default App;
