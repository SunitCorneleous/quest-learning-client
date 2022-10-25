import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSideNav from "./LeftSideNav";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <Container className="my-3">
      <Row className="justify-content-md-center">
        <Col lg="3">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="9" className="px-3 courses">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
