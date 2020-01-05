import axios from "axios";

export function handlePostPeep(userID, sessionKey, fetchPeeps) {
  return async function(peep) {
    const res = await axios.post(
      `https://chitter-backend-api.herokuapp.com/peeps`,
      {
        peep: {
          user_id: userID,
          body: peep
        }
      },
      { headers: { authorization: `Token token=${sessionKey}` } }
    );
    if (res.status < 300) {
      fetchPeeps();
    } else {
    }
  };
}
