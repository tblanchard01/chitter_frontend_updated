import React from "react";

export function Peep({ handle, body, likes }) {
  return (
    <div>
      <h2>{handle}</h2>
      <p>{body}</p>
      <p>{likes} likes </p>
    </div>
  );
}
