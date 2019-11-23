import React from "react";
export function AuthBox({ handleAuth }) {
  return (
    <div>
      <span>
        <form>
          {" "}
          Username: <input /> Password: <input />
          <input
            type="submit" value
            onClick={e => {
              e.preventDefault();
              console.log(e.target);
            }}
          />
        </form>
      </span>
    </div>
  );
}
