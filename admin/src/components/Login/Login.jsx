import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";

import { LoginUser } from "../../redux/action/Login/login";

class Login extends Component {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      UserLogin: {
        EmailId: "",
        password: ""
      }
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  setEmailId = e => {
    let a = Object.assign({}, this.state.UserLogin);
    console.log(a);
    a.EmailId = e.target.value;
    this.setState({ UserLogin: a });
  };
  setpassword = e => {
    let b = Object.assign({}, this.state.UserLogin);
    console.log(b);
    b.password = e.target.value;
    this.setState({ UserLogin: b });
  };

  handleInput = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        UserLogin: {
          EmailId: this.state.UserLogin.EmailId,
          password: this.state.UserLogin.password
        }
      };
      this.props.LoginUser(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Admin Login</h1>
          <div className="col-md-4">
            <Form onSubmit={this.handleInput}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.UserLogin.EmailId}
                  onChange={this.setEmailId}
                />{" "}
                {this.validator.message(
                  "EmailId",
                  this.state.UserLogin.EmailId,
                  "required"
                )}
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.UserLogin.password}
                  onChange={this.setpassword}
                />{" "}
                {this.validator.message(
                  "password",
                  this.state.UserLogin.password,
                  "required|min:3"
                )}
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>
              <div>
                {" "}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "mo");
  // return { error: state.login.message_error, spin: state };
  // return { error: state.login };
  return { error: state.login.message_error, user: state.login };

  // return { user: state.login };
};

export default connect(mapStateToProps, { LoginUser })(Login);
