import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
    <Helmet>
      <title>Blog</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="blog">
      <div className="container">
        <div className="post">
            <div>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, voluptatibus?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti harum porro omnis aperiam iure dolorem quisquam ex magnam, </p>
              <Link>Read more</Link>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog