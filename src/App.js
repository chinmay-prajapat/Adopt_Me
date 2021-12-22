import React from "react";
import ReactDOM from "react-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Router>
        <Routes>
          <Route path="/details/:id" element={<Details />} />

          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
