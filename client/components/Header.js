import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { APP_NAME } from "../config";
import Link from "next/link";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div>
        <Navbar color="light" light expand="md">
          <Link href="/">
            <NavLink style={{ cursor: "pointer" }} className="fw-bold">
              {APP_NAME}
            </NavLink>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {!isAuth() && (
                <React.Fragment>
                  <NavItem>
                    <Link href="/signin">
                      <NavLink style={{ cursor: "pointer" }}>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <NavLink style={{ cursor: "pointer" }}>Signup</NavLink>
                    </Link>
                  </NavItem>
                </React.Fragment>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }}>
                    <Link href="/user">
                      <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                    </Link>
                  </NavLink>
                </NavItem>
              )}
              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }}>
                    <Link href="/admin">
                      <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                    </Link>
                  </NavLink>
                </NavItem>
              )}
              {isAuth() && (
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    onClick={() => signout(() => Router.replace("/signin"))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Header;
