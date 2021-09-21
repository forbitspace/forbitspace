// @flow
import React from "react";
import dynamic from "next/dynamic";

const BlogComp = dynamic(import("../../client/components/ComingSoon"), {
  ssr: false,
});

const Blog = () => {
  return <BlogComp />;
};

export default Blog;
