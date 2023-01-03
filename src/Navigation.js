import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation(props) {
  return (
    <div>
      <Nav>
        <Navbar collapseOnSelect variant="dark" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                Ori Ofir
              </Nav.Link>
              <Nav.Link as={Link} to="/techstack">
                Tech Stack
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    </div>
  );
}

export default Navigation;
