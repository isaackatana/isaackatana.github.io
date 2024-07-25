'use client'
import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog'
import {useParams } from 'react-router-dom'
import { getBlogById } from '../../services/api'

function PostContainer(props) {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBlogById(id)
        .then(response => setBlog(response.data))
        .catch(error => setError(error.message));
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return <div>Loading...</div>;
    }

  return (
    <>
    <Helmet>
        <title>Post Container</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:description" content="Software Developer" />
        <meta property="og:image" content="" />
    </Helmet>
    <div className="post-container">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <img src="" alt="" />
        <iframe src="" ></iframe>
        <iframe src="" frameborder="0"></iframe>
    </div>
    <section>
        <div className='user-opinion'>
            <div className='share-on'>
                <h4>Share</h4>
                <div>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faXTwitter}/>
                </div>
            </div>
        </div>
        <div className='wrapper'>
            <div className='leave-a-comment'>
                <div className="comment-input">
                    <form action="">
                        <textarea name="" id="" placeholder='Leave a comment'></textarea>
                        <div>
                            <button>Post</button>
                        </div>
                    </form>
                </div>
                <div className="comment-display">
                    <div className="comment">
                        <div className="profile-pic">
                            <img src="" alt="" />
                        </div>
                        <div className='user-comment'>
                            <h4>User</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officia!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Blog/>
    </>
  )
}

export default PostContainer