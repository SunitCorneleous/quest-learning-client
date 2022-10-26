import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GiChest } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { ThemeContext } from "../../contexts/ThemeProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { dark, toggleDark } = useContext(ThemeContext);

  let activeStyle = {
    color: "#00008B",
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
        className={`py-3 ${dark === "light" ? "header" : "header-dark"}`}
      >
        <Container>
          {/* site logo */}
          <Link
            className="navbar-brand d-flex align-items-center fw-bold logo"
            to="/"
          >
            <GiChest style={{ fontSize: "3rem" }}></GiChest>
            <span className="m-0" style={{ fontSize: "2rem" }}>
              Quest Learning
            </span>
          </Link>

          {/* navigation links */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-5">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/"
                end
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/faq"
              >
                FAQ
              </NavLink>
            </Nav>

            <Nav>
              {/* toggle theme */}
              <button className="btn" onClick={toggleDark}>
                {dark === "light" ? "Dark" : "Light"}
              </button>

              {/* user */}
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
                      className="logout-btn px-2 m-2"
                      style={{ fontSize: "1.5rem" }}
                    >
                      Logout
                      <AiOutlineLogout className="ms-2"></AiOutlineLogout>
                    </button>
                  </div>
                ) : (
                  // log in or sign up
                  <>
                    <Link
                      className={`m-2 btn ${
                        dark === "light" ? "btn-outline" : "btn-outline"
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
