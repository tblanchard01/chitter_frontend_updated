import React from "react";
import { Peep } from "../Peep/Peep";
export function PeepsContainer({ peeps }) {
  return (
    <div>
      {peeps.map((peep, index) => {
        const { user, body, likes } = peep;
        return (
          <Peep
            key={index}
            handle={user.handle}
            body={body}
            likes={likes.length}
          />
        );
      })}
    </div>
  );
}
