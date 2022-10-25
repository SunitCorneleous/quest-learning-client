import React, { useContext } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const [dark, setDark] = useState("light");
  const { user, logOut } = useContext(AuthContext);

  const toggleDark = () => {
    if (dark === "light") {
      setDark("dark");
    } else {
      setDark("light");
    }
  };

  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error("error: ", error));
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
            <Nav className="mx-auto fs-5">
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
                className={`btn m-2 ${
                  dark === "light" ? "btn-dark" : "btn-light"
                } mx-3`}
                onClick={toggleDark}
              >
                {dark === "light" ? "Dark" : "Light"}
              </button>
              <>
                {user ? (
                  <div className="ms-4">
                    <img
                      src={user?.photoURL}
                      title={user?.displayName}
                      alt="user"
                      className="rounded-pill border border-warning"
                      style={{ width: "55px", cursor: "pointer" }}
                    />

                    <button
                      onClick={logOutHandler}
                      className="btn btn-danger m-2"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      className={`m-2 btn ${
                        dark === "light"
                          ? "btn-outline-dark"
                          : "btn-outline-light"
                      }`}
                      to="/login"
                    >
                      Log In
                    </Link>
                    <Link
                      className={`m-2 btn ${
                        dark === "light" ? "btn-dark" : "btn-light"
                      }`}
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
