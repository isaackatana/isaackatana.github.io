
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
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg" alt="" />
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