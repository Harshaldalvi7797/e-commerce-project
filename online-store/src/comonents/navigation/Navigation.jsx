import React, { Component } from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/action/user/user";

class Navigation extends Component {
  constructor(props) {
    // @ts-ignore
    super(props);
    console.log(props);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="#home">Your-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About Us
              </Nav.Link>

              <DropdownButton id="dropdown-item-button" title="Electronics">
                <Dropdown.Item as={Link} to={"/Categorys/electronics"}>
                  Mobile
                </Dropdown.Item>
                {/* onClick={() =>s
                    this.props.history.push(`/product/${item._id}`)
                  } */}
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-item-button" title="Cloths">
                <Dropdown.Item as="button">Mens</Dropdown.Item>
                <Dropdown.Item as="button">Womens</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <Nav.Link as={Link} to={"/contact"}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <i className="fa fa-cart-arrow-down" aria-hidden="true">
                {/* {this.props.cartItemsCount.items.length > 0 ? (
                  <h5>{this.props.cartItemsCount.items.length}</h5>
                ) : null} */}
              </i>
            </Nav>
            <React.Fragment>
              {this.props.loginuser.user ? (
                <Nav>
                  <Nav.Link
                    as={Link}
                    to={"/login"}
                    onClick={() => this.props.logout()}
                  >
                    Logout
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to={"/signup"}>
                    SignUp
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/login"}>
                    Login
                  </Nav.Link>
                </Nav>
              )}
            </React.Fragment>

            {/* <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link> */}
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    loginuser: state.login,
    cartdata: state.cart,
    cartItemsCount: state.cart
  };
};
export default connect(mapStateToProps, { logout })(Navigation);
