import React from "react";
import { Peep } from "../index"
export function PeepsContainer({ peeps }) {
  return (
    <div>
      {peeps.map((peep) => {
        const { user, body, likes,id } = peep;
        return (
          <Peep
            key={id}
            handle={user.handle}
            body={body}
            likes={likes.length}
          />
        );
      })}
    </div>
  );
}
