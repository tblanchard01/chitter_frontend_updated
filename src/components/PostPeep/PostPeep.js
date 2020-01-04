import React, { useState } from "react";
export function PostPeep({ handlePostPeep }) {
  const [peep, setPeep] = useState("");


  return (
    <div>
      <span>
          Post a Peep: <input onChange={e => setPeep(e.target.value)} />
          <input
            type="submit"
            onClick={e => {
              e.preventDefault();
              handlePostPeep(peep)
            }}
          />
      </span>
    </div>
  );
}
