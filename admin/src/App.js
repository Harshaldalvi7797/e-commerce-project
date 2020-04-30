import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AddProduct from "./components/Product/AddProduct";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navigation /> */}

        <Switch>
          {" "}
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" exact component={AddProduct} />
        </Switch>
      </div>
    );
  }
}

export default App;
