import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <Container className="my-3">
      <Row className="justify-content-md-center">
        <Col lg="3" className="border border-dark">
          {/* side navigation */}
        </Col>
        <Col lg="9" className="px-3 courses">
          {courses.map(course => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
