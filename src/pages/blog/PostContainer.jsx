import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faHeart, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
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
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, a?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestias. Exercitationem voluptate, natus dicta expedita ducimus eum iure, eos totam, perspiciatis ut dolor culpa error quo officiis animi dolorum nulla?</p>
        <img src="" alt="" />
        <div className="yt-video">
            <iframe src="https://www.youtube.com/embed/LxcmF_Kk0Ho?list=PLrEDJjV85iv60M0AiFshvi7Xq3g3F48LJ" title="D-Berry - SO FINE  ft.Floh Namelok &amp; Gamerboy (lyric Visualizer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <section className='user-opinion'>
            <div className="react">
                <FontAwesomeIcon icon={faThumbsUp}/>
                <div>0</div>
            </div>
            <section className='share-on'>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faXTwitter}/>
            </section>
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
                        <h3>Isaac</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa sapiente illum modi nam harum consequuntur cupiditate labore, cum adipisci sequi!
                        </p>
                        <section className='react'>
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <div>0</div>
                        </section>
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