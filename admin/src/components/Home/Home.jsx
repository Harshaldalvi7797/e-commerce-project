import React, { Component } from "react";
import Navigation from "../Navigation";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          <h1>Welcone to Dashboard</h1>
        </div>
      </React.Fragment>
    );
  }
}
// bd@123456
