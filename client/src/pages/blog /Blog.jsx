import { Helmet } from 'react-helmet'
import { Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

function Blog() { 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <>
    <Helmet>
      <title>Katana's Blog</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Development" />
    </Helmet>
    <div className="blog">
      <div className="container">
        {posts.map((post, index) => (
          <div key={post.id} className="post-preview" post={post}  >
            <div className="thumbnail">
              <img src={post.thumbnail} alt={`${post.title} thumbnail`} />
            </div>
            <div className='details'>
              <h2>{post.title}</h2>
              <p>{new Date(post.dateCreated).toLocaleString('en-KE', options)}</p>
              <Link key={post} to={`/blog/posts/${post.slug}`} >Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Blog