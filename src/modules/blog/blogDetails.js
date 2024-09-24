import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { blogData } from ".";

function BlogDetails() {
  const params = useParams();
  const [queryParam] = useSearchParams();
  const blogId = queryParam.get("blogId");
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
