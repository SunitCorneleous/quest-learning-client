import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [dark, setDark] = useState("light");

  const toggleDark = () => {
    if (dark === "light") {
      setDark("dark");
    } else {
      setDark("light");
    }
  };
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={dark}
        variant={dark}
        className="py-3"
      >
        <Container>
          {/* site logo */}
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            Quest Learning
          </Link>

          {/* navigation links */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
              <NavLink className="nav-link" to="/faq">
                FAQ
              </NavLink>
            </Nav>

            {/*  */}
            <Nav>
              <button
                className={`btn ${
                  dark === "light" ? "btn-dark" : "btn-light"
                } mx-3`}
                onClick={toggleDark}
              >
                {dark === "light" ? "Dark" : "Light"}
              </button>
              <Button
                variant={`${
                  dark === "light" ? "outline-dark" : "outline-light"
                }`}
                className="m-2"
              >
                Log In
              </Button>
              <Button
                variant={`${dark === "light" ? "dark" : "light"}`}
                className="m-2"
              >
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
