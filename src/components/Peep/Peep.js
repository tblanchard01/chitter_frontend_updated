import React from "react";

export function Peep({ id, handle, body, likes, authenticated, handleLike }) {
  return (
    <div>
      <h2>{handle}</h2>
      <p>{body}</p>
      <p>{likes} likes </p>
      <p>Peep number: {id}</p>
     {authenticated && <button onClick={ () => handleLike(id)}>Like</button>}
    </div>
  );
}
// a usestate hook here would be good for . 