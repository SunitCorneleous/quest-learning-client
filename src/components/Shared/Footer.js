import React from "react";
import { useContext } from "react";
import { GiChest } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ThemeContext } from "./../../contexts/ThemeProvider";

const Footer = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`py-3 ${dark === "light" ? "footer" : "dark footer-dark"}`}>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p className="col-md-4 mb-0">&copy; 2022 Company, Inc</p>

          <Link
            to="/"
            className="col-md-4 fw-bold d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <GiChest style={{ fontSize: "3rem" }}></GiChest>
            <span className="m-0" style={{ fontSize: "2rem" }}>
              Quest Learning
            </span>
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted fs-5">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link px-2 text-muted fs-5">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link px-2 text-muted fs-5">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link px-2 text-muted fs-5">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-2 text-muted fs-5">
                Log in
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
