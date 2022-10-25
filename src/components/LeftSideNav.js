import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories/")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error("error", error));
  }, []);

  return (
    <div>
      <h3 className="text-center" style={{ fontSize: "1.5rem" }}>
        Categories
      </h3>
      <ul className="list-group">
        {categories.map(category => (
          <Link
            to={`/courses/categories/${category.id}`}
            key={category.id}
            className="list-group-item list-group-item-action list-group-item-warning my-2 text-center"
          >
            {category.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideNav;
