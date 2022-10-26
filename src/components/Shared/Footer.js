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
            href="/"
            className="col-md-4 fw-bold d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <GiChest style={{ fontSize: "3rem" }}></GiChest>
            <span className="m-0" style={{ fontSize: "2rem" }}>
              Quest Learning
            </span>
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted fs-5">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted fs-5">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted fs-5">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted fs-5">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted fs-5">
                About
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
