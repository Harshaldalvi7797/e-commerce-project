import React, { Component } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Signup extends Component {
  constructor() {
    // @ts-ignore
    super();
  }
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
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your First Name *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Last Name *"
                  value=""
                />
              </div>
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
export default Signup;
