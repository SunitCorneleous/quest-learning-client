import React from "react";
import { GiChest } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-3 footer">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

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
              <Link href="#" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
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
