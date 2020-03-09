import React, { Component } from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Nav.Link as={Link} to={"/mobile"}>
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
              <Nav.Link as={Link} to={"/signup"}>
                SignUp
              </Nav.Link>
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Navbar bg="light" expand="lg" style={{ height: "50px" }}>
          <Navbar.Brand href="#home">Your-Shop</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ paddingLeft: "250px" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/signup"}>
                SignUp
              </Nav.Link>
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
      </React.Fragment>
    );
  }
}
export default Navigation;
