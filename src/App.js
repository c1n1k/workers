import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./Table";
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Table} />
          <Route path="/card/:id" component={Card} />
        </div>
      </Router>
    );
  }
}

export default App;
