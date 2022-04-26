import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" expand="md">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/resume">
          Resume
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
