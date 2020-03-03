import React, { Component } from "react";
import "./contact.css";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { ContactSend } from "../../redux/action/contact/contact";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  setname = e => this.setState({ name: e.target.value });
  setemail = e => this.setState({ email: e.target.value });
  setmessage = e => this.setState({ message: e.target.value });

  Inputdata = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      this.props.ContactSend(data);
      console.log(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="" onSubmit={this.handleFormSubmit}>
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name *"
                  value={this.state.name}
                  onChange={this.setname}
                />
                {this.validator.message("name", this.state.name, "required")}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your Email *"
                  value={this.state.email}
                  onChange={this.setemail}
                />
                {this.validator.message("email", this.state.email, "required")}
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  className="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                  value={this.state.message}
                  onChange={this.setmessage}
                ></textarea>
                {this.validator.message(
                  "message",
                  this.state.message,
                  "required"
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);
  // return state;

  console.log(state.contact, "maptostate");
  return { error: state.contact.message_error };
};
export default connect(null, { ContactSend })(Contact);
