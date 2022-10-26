import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaCrown } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();

  const ref = useRef();

  const options = {
    orientation: "landscape",
    unit: "mm",
    format: [280, 210],
  };

  return (
    <div
      className="container mt-3 mb-4 course-details"
      ref={ref}
      style={{ width: "100vw" }}
    >
      <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
        <h2 className="text-center fs-1 mb-4">{course.title}</h2>

        <ReactToPdf
          targetRef={ref}
          filename={`${course.title} beginner to advanced (Quest Learning).pdf`}
          options={options}
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <button className="btn btn-danger my-4" onClick={toPdf}>
              PDF
            </button>
          )}
        </ReactToPdf>
      </div>
      <img
        src={course?.banner}
        alt="banner"
        className="img-fluid mx-auto d-block rounded"
      />
      <div className="py-3">
        <div className="py-4 details p-4 rounded">
          <p className="fs-4">{course.details}</p>
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between mt-2">
          {/* badge */}
          <div
            className="fs-3 bg-warning rounded-pill my-2 d-flex align-items-center justify-content-between px-3 py-2"
            style={{ width: "180px" }}
          >
            <p className="m-0">
              Rating: <span>{course.rating}</span>
            </p>
            <FaStar style={{ fontSize: "2rem" }}></FaStar>
          </div>

          {/* premium access */}
          <Link
            to={`/checkout/${course.id}`}
            className="btn btn-outline-warning fw-bold fs-4 d-flex align-items-center"
          >
            <FaCrown></FaCrown> <span className="ms-2">Get premium access</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
