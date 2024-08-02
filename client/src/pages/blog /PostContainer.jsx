import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog'

function PostContainer() {
  return (
    <>
    <Helmet>
        <title>Post Container</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:description" content="Software Developer" />
        <meta property="og:image" content="" />
    </Helmet>
    <div className="post-container">
        <h1>{}</h1>
        <p>{}</p>
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