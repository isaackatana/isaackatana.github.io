
import { faArrowCircleRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function BlogList(props) {
    const blogs = props.blogs;

    console.log(blogs)
  return (
    <>
        {blogs.map((blog)=>(
            <div className='s-post' key={blog.id}>
                <img src="https://www.skillshare.com/blog/_next/image/?url=https%3A%2F%2Fwww.skillshare.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F04%2Fskillshare-photshop-plant-drawing.jpeg&w=3840&q=75" alt="" />
                <div>
                    <h4>{blog.title}</h4>
                </div>
                <FontAwesomeIcon icon={faArrowCircleRight} className='read-more'/>
            </div>
        ))}
    </>
  )
}

export default BlogList