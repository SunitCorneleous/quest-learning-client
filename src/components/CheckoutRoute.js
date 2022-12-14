import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const CheckoutRoute = () => {
  const course = useLoaderData();
  const navigate = useNavigate();

  const confirmOrder = () => {
    alert("your order is confirmed");

    navigate("/courses");
  };

  return (
    <div className="container my-5">
      <h1>Checkout:</h1>
      <div className="d-flex flex-column flex-lg-row mt-5 w-100  w-lg-25 bg-light rounded shadow-sm">
        <img
          src={course.thumbnail}
          alt="course"
          style={{ width: "100%", height: "400px" }}
          className="rounded"
        />
        <div className="p-3 my-auto">
          <h3 className="text-dark">Course Name: {course.title}</h3>
          <p className="fs-4">Rating: {course.rating}</p>
          <p>{course.details}</p>
          <p className="fw-bold fs-4">Price: {course.price} $</p>
          <button onClick={confirmOrder} className="btn">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutRoute;
