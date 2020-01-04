import React, { useState } from "react";
export function AuthBox({ handleAuth }) {
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <span>
          Username: <input onChange={e => setHandle(e.target.value)} />
          Password: <input onChange={e => setPassword(e.target.value)} />
          <input
            type="submit"
            onClick={e => {
              e.preventDefault();
              handleAuth(handle, password)
            }}
          />
      </span>
    </div>
  );
}
