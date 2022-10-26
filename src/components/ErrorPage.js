import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="container my-5 text-center d-flex flex-column justify-content-center align-items-center"
      style={{ height: "65vh" }}
    >
      <h2 className="text-danger" style={{ fontSize: "6rem" }}>
        404
      </h2>
      <h2 className="text-danger fs-1">Page Not Found</h2>
      <Link className="btn my-5" to="/">
        Take me to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
