import React from "react";
import "./ErrorBox.css"
export function ErrorBox({ message}) {
  return (
    <div className="error">
    ERROR: {message}
    </div>
  );
}
