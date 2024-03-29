import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import LandingPage from "./LandingPage/LandingPage";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Protected from "./Protected/Protected";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Home" component={Protected} element={<Protected />} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Products" component={Products} />
        </Switch>
      </Router>
    );
  }
}
