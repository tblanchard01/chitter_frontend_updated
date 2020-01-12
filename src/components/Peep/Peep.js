import React from "react";
import {LikePeep} from "../../Components"

export function Peep({ id, handle, body, likes, authenticated, handleLike }) {
  return (
    <div>
      <h2>{handle}</h2>
      <p>{body}</p>
      <p>{likes} likes</p>
      <p>Peep number: {id}</p>
     <LikePeep id={id} authenticated={authenticated} handleLike={handleLike}/>
    </div>
  );
}
// a usestate hook here would be good for . 

// {authenticated && <button onClick={ () => handleLike(id)}>Like</button>}
