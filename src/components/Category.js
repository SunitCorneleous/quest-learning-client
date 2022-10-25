import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Category = () => {
  const courses = useLoaderData();

  return (
    <>
      {courses.map(course => (
        <Course key={course.id} course={course}></Course>
      ))}
    </>
  );
};

export default Category;
