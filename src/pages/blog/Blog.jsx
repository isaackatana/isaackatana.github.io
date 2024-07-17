import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Img1 from "./imgs/img1.jpg"

function Blog() {
  return (
    <>
    <Helmet>
      <title>Isaac's | Blog</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Articles written by Isaac Katana" />
      <meta property="og:image" content={Img1} />
    </Helmet>
    <div className="blog">
      <div className="container">
        <div className="post-preview">
          <div className="thumbnail">
            <img src={Img1} alt="" />
          </div>
          <div className='details'>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, voluptatibus?</h3>
            <p>Just now </p>
            <Link to='/blog/articles/post-container'>Read more</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog