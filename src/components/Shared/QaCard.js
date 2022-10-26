import React from "react";

const QaCard = ({ blog }) => {
  return (
    <div className="bg-light rounded shadow-sm py-4 px-5 my-4">
      <h3 className=" text-dark fs-2 fw-bold">{blog.question}</h3>
      <p className="fs-3">{blog.answer}</p>
    </div>
  );
};

export default QaCard;
