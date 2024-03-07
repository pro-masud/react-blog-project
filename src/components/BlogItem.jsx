import React from 'react';

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
              <a className="btn btn-info" href="">Read More</a>
            </div>
        </div> 
    </>
  )
}

export default BlogItem;
