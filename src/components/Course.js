import React from "react";
import { FaStar } from "react-icons/fa";

const Course = ({ course }) => {
  const { title, thumbnail, details, rating } = course;

  return (
    <div
      className="border border-warning rounded p-2 shadow-sm course-card"
      style={{ minHeight: "300px" }}
    >
      <img
        src={thumbnail}
        className="rounded mx-auto d-block"
        style={{ width: "100%", height: "50%" }}
        alt="course"
      />
      <div className="my-3">
        <h3 className="text-center fs-3">{title}</h3>
        <p>{details.slice(0, 85) + "..."}</p>

        <div
          className="d-flex align-items-center justify-content-between bg-light rounded-pill px-3 ms-auto"
          style={{ width: "65px" }}
        >
          <p className="m-0 text-info fw-bold fs-5">{rating}</p>
          <FaStar className="text-warning"></FaStar>
        </div>
      </div>
    </div>
  );
};

export default Course;
