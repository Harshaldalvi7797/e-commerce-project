import React, { Component } from "react";

class NewPass extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Change Password</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <p className="text-center">
              Use the form below to change your password.
            </p>
            <form method="post" id="passwordForm">
              <input
                type="password"
                class="input-lg form-control"
                name="password1"
                placeholder="Enter New Password"
                autocomplete="off"
              />
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6"></div>
              </div>
              {/* <input
                type="password"
                className="input-lg form-control"
                name="password2"
                id="password2"
                placeholder="Repeat Password"
                autocomplete="off"
              /> */}
              <br />

              <input
                type="submit"
                className="col-xs-12 btn btn-primary btn-load btn-lg"
                data-loading-text="Changing Password..."
                value="Change Password"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPass;
