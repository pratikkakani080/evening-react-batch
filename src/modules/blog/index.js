import React from "react";
import { useNavigate } from "react-router-dom";

export const blogData = [
  {
    id: 1,
    name: "blog 1",
  },
  {
    id: 2,
    name: "blog 2",
  },
  {
    id: 3,
    name: "blog 3",
  },
];

function Blog() {
  const navigate = useNavigate();
  const handleClick = (blog) => {
    navigate(`/blogdetails/${blog.id}?blogId=${blog.id}`);
  };
  return (
    <div>
      {blogData.map((el) => {
        return <p onClick={() => handleClick(el)}>{el.name}</p>;
      })}
    </div>
  );
}

export default Blog;
