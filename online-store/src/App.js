import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers/history/index";

import PrivateRoute from "./helpers/history/private.component";
import Navigation from "./comonents/navigation/Navigation";
import Home from "./comonents/home/Home";
import Login from "./comonents/login/Login";
import Signup from "./comonents/signup/Signup";
import ProductDetails from "./comonents/shopProducts/productDetails";
import Contact from "./comonents/contact/contact";
import Mobile from "./comonents/electronics/Mobile";

import Cart from "./comonents/cart/cart";
import Checkout from "./comonents/checkout/checkout";
import ForgetPass from "./comonents/password/forget.password";
import NewPass from "./comonents/password/new.password";
import About from "./comonents/about/about";
import { Pagination } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/product/:id" exact component={ProductDetails} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/Categorys/:name" exact component={Mobile} />
            <Route path="/forget" exact component={ForgetPass} />
            <Route path="/forgotpassword/:token" exact component={NewPass} />

            <PrivateRoute path="/checkout" exact component={Checkout} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
// 580588530;
