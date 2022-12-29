import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./navigation.css";

function Navigation(props) {
  return (
    <div>
      <Nav vertical>
        <NavItem>
          <NavLink href="#" active>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
