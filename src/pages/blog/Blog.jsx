import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Img1 from "./imgs/img1.jpg"
import Img2 from "./imgs/img2.png"
import PostContainer from './PostContainer';

function Blog() {
  const articles = [
    {
      thumbnail: `${Img1}`,
      id: 1,
      title: "Understanding React Hooks",
      content: "An in-depth look at React Hooks and how they can simplify your code.",
      dateCreated: "Just now",
    },
    {
      thumbnail: `${Img2}`,
      id: 2,
      title: "State Management in React",
      content: "Exploring different state management solutions in React.",
      dateCreated: "Just now",
  },
];
  return (
    <>
    <Helmet>
      <title>Katana's Blog</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Development" />
      <meta property="og:image" content={Img1} />
    </Helmet>
    <div className="blog">
      <div className="container">
        {articles.map((article, index) => (
          <div className="post-preview">
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