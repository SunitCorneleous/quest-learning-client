import React from "react";

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
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default Course;
