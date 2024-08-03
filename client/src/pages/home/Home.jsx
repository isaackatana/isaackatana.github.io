
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import publicImg from "./imgs/img1.jpg"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Blog from '../blog /Blog'

function Home() {
  
  return (
    <>
    <Helmet>
      <title>Isaac Katana</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content={publicImg} />
    </Helmet>
    <div className='home'>
      <div className="overlay"></div>

      <div className='wrapper'>
        <div>
          <h1>Hello I'm Isaac</h1>
          <p>Software Developer</p>
        </div>
        <Link to="/about">Read more <FontAwesomeIcon icon={faArrowRight}/></Link>
      </div>

    </div>
    <Blog/>
    </>
  )
}

export default Home