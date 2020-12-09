import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
