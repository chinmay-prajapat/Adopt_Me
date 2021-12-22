import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Rout } from "react-router-dom";
const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adop-Me</h1>

      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
