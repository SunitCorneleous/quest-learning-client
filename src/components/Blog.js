import React from "react";
import QaCard from "./Shared/QaCard";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">This is blog page</h1>

      <div className="py-3">
        {blogs.map(blog => (
          <QaCard key={blog.id} blog={blog}></QaCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
