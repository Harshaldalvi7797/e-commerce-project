import React, { Component } from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginUser } from "../../redux/action/user/user";
import SimpleReactValidator from "simple-react-validator";
import Loader from "../spinner/spinner";

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

  // Inputdata = e => {
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };

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
    // if (this.props.error == null) {
    //   return <Loader />;
    // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Login</h1>

                    {this.props.error ? (
                      <div className="alert alert-danger">
                        {this.props.error.response.data.message}
                      </div>
                    ) : null}

                    <form onSubmit={this.handleInput}>
                      <div className="form-group">
                        <label htmlFor="EmailId">Email address</label>
                        <input
                          type="text"
                          name="EmailId"
                          className="form-control"
                          value={this.state.UserLogin.EmailId}
                          placeholder="Enter email"
                          onChange={this.setEmailId}
                        />
                        {this.validator.message(
                          "EmailId",
                          this.state.UserLogin.EmailId,
                          "required"
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={this.state.UserLogin.password}
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Enter Password"
                          onChange={this.setpassword}
                        />
                        {this.validator.message(
                          "password",
                          this.state.UserLogin.password,
                          "required|min:3"
                        )}
                      </div>
                      <div className="form-group">
                        <p className="text-center">
                          By signing up you accept our{" "}
                          <a href="#">Terms Of Use</a>
                        </p>
                      </div>
                      <div className="col-md-12 text-center ">
                        <button
                          type="submit"
                          className=" btn btn-block mybtn btn-primary tx-tfm"
                        >
                          Login
                        </button>
                        {/* {this.props.spin ? <Loader /> : null} */}
                      </div>
                      <div className="col-md-12 ">
                        <div className="login-or">
                          <hr className="hr-or" />
                          <span className="span-or">or</span>
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <p className="text-center">
                          <a className="google btn mybtn">
                            <i className="fa fa-google-plus"></i> Signup using
                            Google
                          </a>
                        </p>
                      </div>
                      <div className="form-group">
                        <p className="text-center">
                          Don't have account?{" "}
                          {/* <a href="#" id="signup">
                            Sign up here
                          </a> */}
                          <Link to={"/signup"}> Sign up here</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "mo");
  return { error: state.login.message_error, spin: state };
};

export default connect(mapStateToProps, { LoginUser })(Login);
