import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";

const Courses = () => {
  return (
    <Container className="my-3">
      <Row className="justify-content-md-center">
        <Col lg="3">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="9" className="px-3">
          <h1 className="text-center mb-4">Explore our courses</h1>
          <hr />
          <div className="courses">
            <Outlet></Outlet>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
