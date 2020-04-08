import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.onClickLink = this.onClickLink.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onClickLink() {
    if (this.state.isOpen) {
      this.toggle();
    }
  }
  render() {
    return (
      <Navbar className="mb-4" color="dark" dark expand="md">
        {this.state.status}
        <Link to="/" className="navbar-brand" onClick={this.onClickLink}>
          My Portfolio
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse
          isOpen={this.state.isOpen}
          onEntered={this.onEntered}
          onExited={this.onExited}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link" onClick={this.onClickLink}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link" onClick={this.onClickLink}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/products"
                className="nav-link"
                onClick={this.onClickLink}
              >
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/contact"
                className="nav-link"
                onClick={this.onClickLink}
              >
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
