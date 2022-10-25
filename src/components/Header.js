import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
      <Navbar bg={dark} variant={dark}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <button
            className={`btn ${dark === "light" ? "btn-dark" : "btn-light"}`}
            onClick={toggleDark}
          >
            {dark === "light" ? "Dark" : "Light"}
          </button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
