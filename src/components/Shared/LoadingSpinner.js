import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="container text-center" style={{ marginTop: "300px" }}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default LoadingSpinner;
