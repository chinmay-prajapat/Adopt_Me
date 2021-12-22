import React from "react";
import ReactDOM from "react-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
