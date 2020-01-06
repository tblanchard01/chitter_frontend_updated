import axios from "axios";

export function handleLike(userID, sessionKey, fetchPeeps) {
  return async function(peepId) {
    const res = await axios.put(
      `https://chitter-backend-api.herokuapp.com/peeps/${peepId}/likes/${userID}`,null,
      { headers: { authorization: `Token token=${sessionKey}` } }
    );
    if (res.status < 300) {
      fetchPeeps();
    } else {
    }
  };
}

//   /peeps/:peep_id/likes/:user_id

// curl "https://chitter-backend-api.herokuapp.com/peeps/2/likes/1" \
//   -X PUT \
//   -H "Authorization: Token token=a_valid_session_key"
