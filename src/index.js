import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <h2>
      Hello EveryOne my first react i did it in the past did not know that much
    </h2>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
