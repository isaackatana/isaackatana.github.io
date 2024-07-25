import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { articles } from './BlogData'
import { getBlogs } from '../../Services/api'

function Blog() {
  const [blogs, setBlogs] = useState(articles);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogs()
      .then(response => setBlogs(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <>
    <Helmet>
      <title>Katana's Blog</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Development" />
    </Helmet>
    <div className="blog">
      <div className="container">
        {articles.map((article, index) => (
          <div key={article.id} className="post-preview">
            <div className="thumbnail">
              <img src={article.thumbnail} alt="" />
            </div>
            <div className='details'>
              <h2>{article.title}</h2>
              <p>{article.dateCreated}</p>
              <Link key={article} to={`/blog/articles/${article.id}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Blog