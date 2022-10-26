import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title, thumbnail, details, rating } = course;

  return (
    <div
      className="rounded shadow-sm course-card"
      style={{ minHeight: "300px" }}
    >
      <img
        src={thumbnail}
        className="rounded mx-auto d-block"
        style={{ width: "100%", height: "50%" }}
        alt="course"
      />
      <div className="my-3 px-2">
        <h3 className="text-center fs-3 text-dark">{title}</h3>
        <p>{details.slice(0, 85) + "..."}</p>

        <div className="d-flex justify-content-between">
          <Link to={`/course-details/${id}`} className="btn btn-primary">
            See Details
          </Link>
          <div
            className="d-flex align-items-center justify-content-between bg-light rounded-pill px-3"
            style={{ width: "65px" }}
          >
            <p className="m-0 text-info fw-bold fs-5">{rating}</p>
            <FaStar className="text-warning"></FaStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
