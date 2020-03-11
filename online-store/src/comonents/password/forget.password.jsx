import React, { Component } from "react";

import { connect } from "react-redux";
import { forgetPassword } from "../../redux/action/password/password";
import SimpleReactValidator from "simple-react-validator";
class ForgetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserLogin: {
        EmailId: ""
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
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        UserLogin: {
          EmailId: this.state.UserLogin.EmailId
        }
      };
      this.props.forgetPassword(data);
      console.log(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 col-md-offset-4"
            style={{ marginLeft: "250px" }}
          >
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3>
                    <i className="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
                    {this.props.error ? (
                      <div className="alert alert-danger">
                        {this.props.error.response.data.message}
                        {/* {this.props.error.message_error} */}
                      </div>
                    ) : null}
                    <form onSubmit={this.handleFormSubmit}>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            name="EmailId"
                            placeholder="email address"
                            className="form-control"
                            type="email"
                            onChange={this.setEmailId}
                            value={this.state.UserLogin.EmailId}
                          />
                        </div>
                        {this.validator.message(
                          "EmailId",
                          this.state.UserLogin.EmailId,
                          "required"
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          name="submit"
                          className="btn btn-lg btn-primary btn-block"
                          value="Reset Password"
                          type="submit"
                        />
                      </div>
                      {/* 
                      <input
                        type="hidden"
                        class="hide"
                        name="token"
                        id="token"
                        value=""
                      /> */}
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
  console.log(state.pass);
  return {
    error: state.pass.message_error
  };
};
export default connect(mapStateToProps, { forgetPassword })(ForgetPass);
