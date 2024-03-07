import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import blogData from "../faker/blog.js";
import BlogItem from "../components/BlogItem.jsx";

function Blog() {
  const { slug } = useParams();
  return (
    <>
      <Header />
      <div className="blog-section mt-5">
        <div className="container">
          {blogData.map((single_blog, index) => (
            <BlogItem single={single_blog} key={index} />
          ))}          
        </div>
      </div>
    </>
  );
}

export default Blog;
