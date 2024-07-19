import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog'
import { Link } from 'react-router-dom'

function PostContainer() {
  return (
    <>
    <Helmet>
      <title>Post Container</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className='previous-page'>
        <Link to='/blog'><FontAwesomeIcon icon={faArrowLeft}/></Link>
    </div>
    <div className="post-container">
        <h1>{}</h1>
        <p>{}</p>
        <img src="" alt="" />
        <div className="yt-video">
            <iframe src="https://www.youtube.com/embed/LxcmF_Kk0Ho?list=PLrEDJjV85iv60M0AiFshvi7Xq3g3F48LJ" title="D-Berry - SO FINE  ft.Floh Namelok &amp; Gamerboy (lyric Visualizer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <section className='user-opinion'>
            <section className='share-on'>
                <h4>Share</h4>
                <div>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faXTwitter}/>
                </div>
            </section>
            <div className="react">
                <span>0</span>
                <FontAwesomeIcon icon={faThumbsUp}/>
            </div>
        </section>
        <div className='wrapper'>
            <section className='leave-a-comment'>
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
                            <section className='react'>
                                <span>0</span>
                                <FontAwesomeIcon icon={faThumbsUp}/>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default PostContainer