import React from 'react'
import { useParams } from 'react-router-dom';
import blogData from '../faker/blog.js';

const Single = () => {
const { slug } = useParams();
const singleData = blogData.find((data) => data.slug == slug);
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card-header">
                    <img className='w-100' src={singleData.photo} alt="" />
                </div>
                <div className="card-body">
                    <h2>{singleData.title}</h2>
                    <p>{singleData.content}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Single;