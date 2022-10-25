import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();

  return (
    <div className="container mt-3 mb-4 course-details">
      <h2 className="text-center fs-1 mb-4">{course.title}</h2>
      <img
        src={course?.banner}
        alt="banner"
        className="img-fluid mx-auto d-block rounded"
      />
      <div className="pt-5">
        <p className="fs-3 bg-warning d-inline-block px-3 py-2 rounded-pill">
          <span>Rating: </span>
          {course.rating}
        </p>
      </div>
      <div className="py-4 details p-4 rounded">
        <p className="fs-4">{course.details}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
