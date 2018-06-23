import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "flexboxgrid2";
import {} from "react-router-dom";
import Profile from "./Profile";

export const publicUrl = process.env.PUBLIC_URL;

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Twitter</title>
          <meta name="description" content="Twitter" />
        </Helmet>
        <Router>
          <div>
            <Route path="/EveryInteraction" component={Profile} />
            <Redirect from="/" to="EveryInteraction" />
          </div>
        </Router>
      </div>
    );
  }
}
