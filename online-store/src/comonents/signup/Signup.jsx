// @ts-nocheck
import React, { Component } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { UserRegister } from "../../redux/action/user/user";
import SimpleReactValidator from "simple-react-validator";

class Signup extends Component {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      UserLogin: {
        EmailId: "",
        password: ""
      }
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  setFirstName = e => this.setState({ FirstName: e.target.value });
  setLastName = e => this.setState({ LastName: e.target.value });

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

  Inputdata = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    if (this.validator.allValid()) {
      let data = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        UserLogin: {
          EmailId: this.state.UserLogin.EmailId,
          password: this.state.UserLogin.password
        }
      };
      this.props.UserRegister(data);

      console.log(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>If Already have an account then go to Login</h3>
            <div className="form-group" style={{ paddingLeft: "100px" }}>
              <Link as={Link} to={"/login"}>
                <Button className="btnSubmit">Login</Button>

                {/* <input type="submit" className="btnSubmit" value="Login" /> */}
              </Link>
              {/* <input type="submit" className="btnSubmit" value="Login" to={"/login"} /> */}
            </div>
            {/* <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Login" />
              </div>
              <div className="form-group">
                <a href="#" className="btnForgetPwd">
                  Forget Password?
                </a>
              </div>
            </form> */}
          </div>
          <div className="col-md-6 login-form-2">
            <div className="login-logo"></div>
            <h3>SignUp here</h3>

            {/* error */}
            {this.props.error ? (
              <div className="alert alert-danger">
                {this.props.error.response.data.message}
              </div>
            ) : null}

            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your First Name *"
                  name="FirstName"
                  value={this.state.FirstName}
                  onChange={this.setFirstName}
                />
                {this.validator.message(
                  "FirstName",
                  this.state.FirstName,
                  "required|alpha|min:3"
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Last Name *"
                  name="LastName"
                  value={this.state.LastName}
                  onChange={this.setLastName}
                />
                {this.validator.message(
                  "LastName",
                  this.state.LastName,
                  "required|alpha|min:4"
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  name="EmailId"
                  value={this.state.UserLogin.EmailId}
                  onChange={this.setEmailId}
                />
                {this.validator.message(
                  "EmailId",
                  this.state.UserLogin.EmailId,
                  "required|email"
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Password *"
                  name="password"
                  value={this.state.UserLogin.password}
                  onChange={this.setpassword}
                />
                {this.validator.message(
                  "password",
                  this.state.UserLogin.password,
                  "required|min:6"
                )}
              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Submit" />
              </div>
              {/* <div className="form-group">
                <a href="#" className="btnForgetPwd">
                  Forget Password?
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.registerRed, "maptostate");
  return { error: state.registerRed.message_error };
  // return state;
};
export default connect(mapStateToProps, { UserRegister })(Signup);
