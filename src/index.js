import "./styles.css";
import react from "react";
import reactDom from "react-dom";
import App from "./App";

reactDom.render(
  <div>
    <App />
    <p> Depend on Time above Greetings will change with colour </p>
  </div>,
  document.getElementById("root")
);
