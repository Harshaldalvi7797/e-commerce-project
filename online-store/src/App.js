import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./comonents/navigation/Navigation";
import Home from "./comonents/home/Home";
import Login from "./comonents/login/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
