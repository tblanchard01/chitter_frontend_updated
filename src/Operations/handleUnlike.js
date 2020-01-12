import axios from "axios";

export function handleUnlike(userID, sessionKey, fetchPeeps) {
  return async function(peepId) {
    const res = await axios.delete(
      `https://chitter-backend-api.herokuapp.com/peeps/${peepId}/likes/${userID}`,
      { headers: { authorization: `Token token=${sessionKey}` } }
    );
    if (res.status < 300) {
      fetchPeeps();
    } 
  };
}
