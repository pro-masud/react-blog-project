import React from 'react';
import { Link } from 'react-router-dom';
import { createProductSlug } from '../helpers/helper.js';

const BlogItem = ({single}) => {
  return (
    <>
       <div className="row my-5 shadow">
            <div className="col-md-4">
              <img className="w-100 rounded" src={single.photo} alt="" />
            </div>
            <div className="col-md-8">
              <h2>{single.title}</h2>
              <p>{single.content}</p>
              <Link className="btn btn-info" to={`/blog/${createProductSlug(single.title)}`}>Read More</Link>
            </div>
        </div> 
    </>
  )
}

export default BlogItem;
