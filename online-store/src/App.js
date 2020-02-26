import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./comonents/navigation/Navigation";
import Home from "./comonents/home/Home";
import Login from "./comonents/login/Login";
import Signup from "./comonents/signup/Signup";
import ProductDetails from "./comonents/shopProducts/productDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/product/:id" exact component={ProductDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
