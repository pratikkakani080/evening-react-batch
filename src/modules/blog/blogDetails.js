import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from ".";

function BlogDetails() {
  const params = useParams();
  const [selectedBlog, setSelectedBlog] = useState({});

  useEffect(() => {
    const blog = blogData.find((el) => el.id === Number(params.id));
    setSelectedBlog(blog);
  }, [params]);

  return (
    <div>
      <p>{selectedBlog.name}</p>
    </div>
  );
}

export default BlogDetails;
