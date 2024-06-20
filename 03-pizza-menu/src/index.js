import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>hello React !!!</h1>;
}
///react v 18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react v18
