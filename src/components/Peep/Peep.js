import React from "react";
import { Heart } from "../../Components";

export function Peep({
  id,
  handle,
  body,
  likes,
  authenticated,
  handleLike,
  handleUnlike
}) {
  return (
    <div>
      <h2>{handle}</h2>
      <p>{body}</p>
      <p>{likes} likes</p>
      <p>Peep number: {id}</p>
      <Heart
        id={id}
        authenticated={authenticated}
        handleLike={handleLike}
        handleUnlike={handleUnlike}
      />
    </div>
  );
}
