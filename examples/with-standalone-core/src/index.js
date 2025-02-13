import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import IdkitCoreLoader from "./components/IdkitCoreLoader";

ReactDOM.render(
  <React.StrictMode>
    <IdkitCoreLoader>
      <App />
    </IdkitCoreLoader>
  </React.StrictMode>,
  document.getElementById("root")
);
