import React from "react";
import { Peep } from "../index"
export function PeepsContainer({ peeps, authenticated, handleLike, handleUnlike }) {
  return (
    <div>
      {peeps.map((peep) => {
        const { user, body, likes,id } = peep;
        return (
          <Peep
            key={id}
            id={id}
            handle={user.handle}
            body={body}
            likes={likes.length}
            authenticated={authenticated}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
          />
        );
      })}
    </div>
  );
}
