import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Person from "./components/Person";
import JsxLearn from "./components/JsxLearn";
import Todolist from "./components/Todolist";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Todolist />
    {/* <JsxLearn /> */}

    {/* <App />
    <App /> */}
  </div>
);
